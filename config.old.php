<?php 
return array (
  'security' => 
  array (
    'mode' => 'strict',
    'force_https' => true,
    'session_lifespan' => 7200,
    'perform_session_fingerprinting' => true,
    'debug_fingerprint' => false,
  ),
  'debug_and_monitoring' => 
  array (
    'debug' => false,
    'log_stacktrace' => true,
    'stacktrace_length' => 25,
    'report_errors' => true,
  ),
  'info' => 
  array (
    'salt' => '3089f17a55f3a4b327e1abbe8191e66a',
    'instance_id' => 'cd88462b-5283-4fa9-9089-7ed5967bacf2',
  ),
  'url' => 'clients.piquesquid.com/',
  'admin_area_prefix' => '/admin',
  'update_branch' => 'release',
  'maintenance_mode' => 
  array (
    'enabled' => false,
    'allowed_urls' => 
    array (
    ),
    'allowed_ips' => 
    array (
    ),
  ),
  'disable_auto_cron' => true,
  'i18n' => 
  array (
    'locale' => 'en_US',
    'timezone' => 'UTC',
    'date_format' => 'medium',
    'time_format' => 'short',
    'datetime_pattern' => '',
  ),
  'path_data' => '/home/piquesquid/clients.piquesquid.com/data',
  'db' => 
  array (
    'type' => 'mysql',
    'host' => 'localhost',
    'port' => '3306',
    'name' => 'piquesquid_clientsdb',
    'user' => 'piquesquid_admin_cai',
    'password' => 'FpQFKc6cBv@YMUk',
  ),
  'twig' => 
  array (
    'debug' => false,
    'auto_reload' => true,
    'cache' => '/home/piquesquid/clients.piquesquid.com/data/cache',
  ),
  'api' => 
  array (
    'require_referrer_header' => false,
    'allowed_ips' => 
    array (
    ),
    'rate_span' => 3600,
    'rate_limit' => 1000,
    'throttle_delay' => 2,
    'rate_span_login' => 60,
    'rate_limit_login' => 20,
    'CSRFPrevention' => true,
    'rate_limit_whitelist' => 
    array (
    ),
  ),
);