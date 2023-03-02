# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktf/provider-aws.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  endpoint_type: str,
  engine_name: str,
  certificate_arn: str = None,
  database_name: str = None,
  elasticsearch_settings: DmsEndpointElasticsearchSettings = None,
  extra_connection_attributes: str = None,
  id: str = None,
  kafka_settings: DmsEndpointKafkaSettings = None,
  kinesis_settings: DmsEndpointKinesisSettings = None,
  kms_key_arn: str = None,
  mongodb_settings: DmsEndpointMongodbSettings = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  redis_settings: DmsEndpointRedisSettings = None,
  redshift_settings: DmsEndpointRedshiftSettings = None,
  s3_settings: DmsEndpointS3Settings = None,
  secrets_manager_access_role_arn: str = None,
  secrets_manager_arn: str = None,
  server_name: str = None,
  service_access_role: str = None,
  ssl_mode: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DmsEndpointTimeouts = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName">engine_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings">elasticsearch_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes">extra_connection_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings">kafka_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings">kinesis_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongodbSettings">mongodb_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings">redis_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings">redshift_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.s3Settings">s3_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | s3_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerArn">secrets_manager_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serviceAccessRole">service_access_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearch_settings`<sup>Optional</sup> <a name="elasticsearch_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extra_connection_attributes`<sup>Optional</sup> <a name="extra_connection_attributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafka_settings`<sup>Optional</sup> <a name="kafka_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesis_settings`<sup>Optional</sup> <a name="kinesis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodb_settings`<sup>Optional</sup> <a name="mongodb_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongodbSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

##### `redis_settings`<sup>Optional</sup> <a name="redis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshift_settings`<sup>Optional</sup> <a name="redshift_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `s3_settings`<sup>Optional</sup> <a name="s3_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.s3Settings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

s3_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `secrets_manager_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secrets_manager_arn`<sup>Optional</sup> <a name="secrets_manager_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `service_access_role`<sup>Optional</sup> <a name="service_access_role" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serviceAccessRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">put_elasticsearch_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings">put_kafka_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings">put_kinesis_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings">put_mongodb_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings">put_redis_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings">put_redshift_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings">put_s3_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">reset_elasticsearch_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">reset_extra_connection_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings">reset_kafka_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings">reset_kinesis_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings">reset_mongodb_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings">reset_redis_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">reset_redshift_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetS3Settings">reset_s3_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn">reset_secrets_manager_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn">reset_secrets_manager_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole">reset_service_access_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode">reset_ssl_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_elasticsearch_settings` <a name="put_elasticsearch_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```python
def put_elasticsearch_settings(
  endpoint_uri: str,
  service_access_role_arn: str,
  error_retry_duration: typing.Union[int, float] = None,
  full_load_error_percentage: typing.Union[int, float] = None
) -> None
```

###### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.endpointUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

###### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.serviceAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

###### `error_retry_duration`<sup>Optional</sup> <a name="error_retry_duration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.errorRetryDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

###### `full_load_error_percentage`<sup>Optional</sup> <a name="full_load_error_percentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.fullLoadErrorPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

##### `put_kafka_settings` <a name="put_kafka_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```python
def put_kafka_settings(
  broker: str,
  include_control_details: typing.Union[bool, IResolvable] = None,
  include_null_and_empty: typing.Union[bool, IResolvable] = None,
  include_partition_value: typing.Union[bool, IResolvable] = None,
  include_table_alter_operations: typing.Union[bool, IResolvable] = None,
  include_transaction_details: typing.Union[bool, IResolvable] = None,
  message_format: str = None,
  message_max_bytes: typing.Union[int, float] = None,
  no_hex_prefix: typing.Union[bool, IResolvable] = None,
  partition_include_schema_table: typing.Union[bool, IResolvable] = None,
  sasl_password: str = None,
  sasl_username: str = None,
  security_protocol: str = None,
  ssl_ca_certificate_arn: str = None,
  ssl_client_certificate_arn: str = None,
  ssl_client_key_arn: str = None,
  ssl_client_key_password: str = None,
  topic: str = None
) -> None
```

###### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.broker"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}.

---

###### `include_control_details`<sup>Optional</sup> <a name="include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.includeControlDetails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

###### `include_null_and_empty`<sup>Optional</sup> <a name="include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.includeNullAndEmpty"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

###### `include_partition_value`<sup>Optional</sup> <a name="include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.includePartitionValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

###### `include_table_alter_operations`<sup>Optional</sup> <a name="include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.includeTableAlterOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

###### `include_transaction_details`<sup>Optional</sup> <a name="include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.includeTransactionDetails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

###### `message_format`<sup>Optional</sup> <a name="message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.messageFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

###### `message_max_bytes`<sup>Optional</sup> <a name="message_max_bytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.messageMaxBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

###### `no_hex_prefix`<sup>Optional</sup> <a name="no_hex_prefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.noHexPrefix"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

###### `partition_include_schema_table`<sup>Optional</sup> <a name="partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.partitionIncludeSchemaTable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

###### `sasl_password`<sup>Optional</sup> <a name="sasl_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.saslPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

###### `sasl_username`<sup>Optional</sup> <a name="sasl_username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.saslUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

###### `security_protocol`<sup>Optional</sup> <a name="security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.securityProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

###### `ssl_ca_certificate_arn`<sup>Optional</sup> <a name="ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.sslCaCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

###### `ssl_client_certificate_arn`<sup>Optional</sup> <a name="ssl_client_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.sslClientCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

###### `ssl_client_key_arn`<sup>Optional</sup> <a name="ssl_client_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.sslClientKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

###### `ssl_client_key_password`<sup>Optional</sup> <a name="ssl_client_key_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.sslClientKeyPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.topic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}.

---

##### `put_kinesis_settings` <a name="put_kinesis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```python
def put_kinesis_settings(
  include_control_details: typing.Union[bool, IResolvable] = None,
  include_null_and_empty: typing.Union[bool, IResolvable] = None,
  include_partition_value: typing.Union[bool, IResolvable] = None,
  include_table_alter_operations: typing.Union[bool, IResolvable] = None,
  include_transaction_details: typing.Union[bool, IResolvable] = None,
  message_format: str = None,
  partition_include_schema_table: typing.Union[bool, IResolvable] = None,
  service_access_role_arn: str = None,
  stream_arn: str = None
) -> None
```

###### `include_control_details`<sup>Optional</sup> <a name="include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.includeControlDetails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

###### `include_null_and_empty`<sup>Optional</sup> <a name="include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.includeNullAndEmpty"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

###### `include_partition_value`<sup>Optional</sup> <a name="include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.includePartitionValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

###### `include_table_alter_operations`<sup>Optional</sup> <a name="include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.includeTableAlterOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

###### `include_transaction_details`<sup>Optional</sup> <a name="include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.includeTransactionDetails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

###### `message_format`<sup>Optional</sup> <a name="message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.messageFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

###### `partition_include_schema_table`<sup>Optional</sup> <a name="partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.partitionIncludeSchemaTable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

###### `service_access_role_arn`<sup>Optional</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.serviceAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

###### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.streamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

##### `put_mongodb_settings` <a name="put_mongodb_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings"></a>

```python
def put_mongodb_settings(
  auth_mechanism: str = None,
  auth_source: str = None,
  auth_type: str = None,
  docs_to_investigate: str = None,
  extract_doc_id: str = None,
  nesting_level: str = None
) -> None
```

###### `auth_mechanism`<sup>Optional</sup> <a name="auth_mechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.authMechanism"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

###### `auth_source`<sup>Optional</sup> <a name="auth_source" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.authSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

###### `docs_to_investigate`<sup>Optional</sup> <a name="docs_to_investigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.docsToInvestigate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

###### `extract_doc_id`<sup>Optional</sup> <a name="extract_doc_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.extractDocId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

###### `nesting_level`<sup>Optional</sup> <a name="nesting_level" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.nestingLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

##### `put_redis_settings` <a name="put_redis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```python
def put_redis_settings(
  auth_type: str,
  port: typing.Union[int, float],
  server_name: str,
  auth_password: str = None,
  auth_user_name: str = None,
  ssl_ca_certificate_arn: str = None,
  ssl_security_protocol: str = None
) -> None
```

###### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

###### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

###### `auth_password`<sup>Optional</sup> <a name="auth_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.authPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}.

---

###### `auth_user_name`<sup>Optional</sup> <a name="auth_user_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.authUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}.

---

###### `ssl_ca_certificate_arn`<sup>Optional</sup> <a name="ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.sslCaCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

###### `ssl_security_protocol`<sup>Optional</sup> <a name="ssl_security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.sslSecurityProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}.

---

##### `put_redshift_settings` <a name="put_redshift_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```python
def put_redshift_settings(
  bucket_folder: str = None,
  bucket_name: str = None,
  encryption_mode: str = None,
  server_side_encryption_kms_key_id: str = None,
  service_access_role_arn: str = None
) -> None
```

###### `bucket_folder`<sup>Optional</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.bucketFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

###### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.encryptionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

###### `server_side_encryption_kms_key_id`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.serverSideEncryptionKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

###### `service_access_role_arn`<sup>Optional</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.serviceAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `put_s3_settings` <a name="put_s3_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```python
def put_s3_settings(
  add_column_name: typing.Union[bool, IResolvable] = None,
  bucket_folder: str = None,
  bucket_name: str = None,
  canned_acl_for_objects: str = None,
  cdc_inserts_and_updates: typing.Union[bool, IResolvable] = None,
  cdc_inserts_only: typing.Union[bool, IResolvable] = None,
  cdc_max_batch_interval: typing.Union[int, float] = None,
  cdc_min_file_size: typing.Union[int, float] = None,
  cdc_path: str = None,
  compression_type: str = None,
  csv_delimiter: str = None,
  csv_no_sup_value: str = None,
  csv_null_value: str = None,
  csv_row_delimiter: str = None,
  data_format: str = None,
  data_page_size: typing.Union[int, float] = None,
  date_partition_delimiter: str = None,
  date_partition_enabled: typing.Union[bool, IResolvable] = None,
  date_partition_sequence: str = None,
  dict_page_size_limit: typing.Union[int, float] = None,
  enable_statistics: typing.Union[bool, IResolvable] = None,
  encoding_type: str = None,
  encryption_mode: str = None,
  external_table_definition: str = None,
  ignore_header_rows: typing.Union[int, float] = None,
  ignore_headers_row: typing.Union[int, float] = None,
  include_op_for_full_load: typing.Union[bool, IResolvable] = None,
  max_file_size: typing.Union[int, float] = None,
  parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable] = None,
  parquet_version: str = None,
  preserve_transactions: typing.Union[bool, IResolvable] = None,
  rfc4180: typing.Union[bool, IResolvable] = None,
  row_group_length: typing.Union[int, float] = None,
  server_side_encryption_kms_key_id: str = None,
  service_access_role_arn: str = None,
  timestamp_column_name: str = None,
  use_csv_no_sup_value: typing.Union[bool, IResolvable] = None,
  use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable] = None
) -> None
```

###### `add_column_name`<sup>Optional</sup> <a name="add_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.addColumnName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}.

---

###### `bucket_folder`<sup>Optional</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.bucketFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

###### `canned_acl_for_objects`<sup>Optional</sup> <a name="canned_acl_for_objects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.cannedAclForObjects"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}.

---

###### `cdc_inserts_and_updates`<sup>Optional</sup> <a name="cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.cdcInsertsAndUpdates"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}.

---

###### `cdc_inserts_only`<sup>Optional</sup> <a name="cdc_inserts_only" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.cdcInsertsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}.

---

###### `cdc_max_batch_interval`<sup>Optional</sup> <a name="cdc_max_batch_interval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.cdcMaxBatchInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}.

---

###### `cdc_min_file_size`<sup>Optional</sup> <a name="cdc_min_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.cdcMinFileSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}.

---

###### `cdc_path`<sup>Optional</sup> <a name="cdc_path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.cdcPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}.

---

###### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.compressionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}.

---

###### `csv_delimiter`<sup>Optional</sup> <a name="csv_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.csvDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}.

---

###### `csv_no_sup_value`<sup>Optional</sup> <a name="csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.csvNoSupValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}.

---

###### `csv_null_value`<sup>Optional</sup> <a name="csv_null_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.csvNullValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}.

---

###### `csv_row_delimiter`<sup>Optional</sup> <a name="csv_row_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.csvRowDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}.

---

###### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.dataFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}.

---

###### `data_page_size`<sup>Optional</sup> <a name="data_page_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.dataPageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}.

---

###### `date_partition_delimiter`<sup>Optional</sup> <a name="date_partition_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.datePartitionDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}.

---

###### `date_partition_enabled`<sup>Optional</sup> <a name="date_partition_enabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.datePartitionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}.

---

###### `date_partition_sequence`<sup>Optional</sup> <a name="date_partition_sequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.datePartitionSequence"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}.

---

###### `dict_page_size_limit`<sup>Optional</sup> <a name="dict_page_size_limit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.dictPageSizeLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}.

---

###### `enable_statistics`<sup>Optional</sup> <a name="enable_statistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.enableStatistics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}.

---

###### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.encodingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}.

---

###### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.encryptionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

###### `external_table_definition`<sup>Optional</sup> <a name="external_table_definition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.externalTableDefinition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}.

---

###### `ignore_header_rows`<sup>Optional</sup> <a name="ignore_header_rows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.ignoreHeaderRows"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}.

---

###### `ignore_headers_row`<sup>Optional</sup> <a name="ignore_headers_row" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.ignoreHeadersRow"></a>

- *Type:* typing.Union[int, float]

This setting has no effect, is deprecated, and will be removed in a future version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_headers_row DmsEndpoint#ignore_headers_row}

---

###### `include_op_for_full_load`<sup>Optional</sup> <a name="include_op_for_full_load" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.includeOpForFullLoad"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}.

---

###### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.maxFileSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

###### `parquet_timestamp_in_millisecond`<sup>Optional</sup> <a name="parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.parquetTimestampInMillisecond"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}.

---

###### `parquet_version`<sup>Optional</sup> <a name="parquet_version" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.parquetVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}.

---

###### `preserve_transactions`<sup>Optional</sup> <a name="preserve_transactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.preserveTransactions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}.

---

###### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.rfc4180"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}.

---

###### `row_group_length`<sup>Optional</sup> <a name="row_group_length" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.rowGroupLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}.

---

###### `server_side_encryption_kms_key_id`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.serverSideEncryptionKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

###### `service_access_role_arn`<sup>Optional</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.serviceAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

###### `timestamp_column_name`<sup>Optional</sup> <a name="timestamp_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.timestampColumnName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}.

---

###### `use_csv_no_sup_value`<sup>Optional</sup> <a name="use_csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.useCsvNoSupValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}.

---

###### `use_task_start_time_for_full_load_timestamp`<sup>Optional</sup> <a name="use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.useTaskStartTimeForFullLoadTimestamp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}.

---

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_elasticsearch_settings` <a name="reset_elasticsearch_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```python
def reset_elasticsearch_settings() -> None
```

##### `reset_extra_connection_attributes` <a name="reset_extra_connection_attributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```python
def reset_extra_connection_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kafka_settings` <a name="reset_kafka_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```python
def reset_kafka_settings() -> None
```

##### `reset_kinesis_settings` <a name="reset_kinesis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```python
def reset_kinesis_settings() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_mongodb_settings` <a name="reset_mongodb_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings"></a>

```python
def reset_mongodb_settings() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_redis_settings` <a name="reset_redis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```python
def reset_redis_settings() -> None
```

##### `reset_redshift_settings` <a name="reset_redshift_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```python
def reset_redshift_settings() -> None
```

##### `reset_s3_settings` <a name="reset_s3_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```python
def reset_s3_settings() -> None
```

##### `reset_secrets_manager_access_role_arn` <a name="reset_secrets_manager_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn"></a>

```python
def reset_secrets_manager_access_role_arn() -> None
```

##### `reset_secrets_manager_arn` <a name="reset_secrets_manager_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn"></a>

```python
def reset_secrets_manager_arn() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_service_access_role` <a name="reset_service_access_role" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole"></a>

```python
def reset_service_access_role() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpoint.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">elasticsearch_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn">endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings">kafka_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings">kinesis_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings">mongodb_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings">redis_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings">redshift_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3Settings">s3_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">elasticsearch_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput">engine_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">extra_connection_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">kafka_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">kinesis_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput">mongodb_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">redis_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">redshift_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">s3_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput">secrets_manager_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput">secrets_manager_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput">service_access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName">engine_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">extra_connection_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn">secrets_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole">service_access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `elasticsearch_settings`<sup>Required</sup> <a name="elasticsearch_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```python
elasticsearch_settings: DmsEndpointElasticsearchSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpoint_arn`<sup>Required</sup> <a name="endpoint_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```python
endpoint_arn: str
```

- *Type:* str

---

##### `kafka_settings`<sup>Required</sup> <a name="kafka_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```python
kafka_settings: DmsEndpointKafkaSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesis_settings`<sup>Required</sup> <a name="kinesis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```python
kinesis_settings: DmsEndpointKinesisSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `mongodb_settings`<sup>Required</sup> <a name="mongodb_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings"></a>

```python
mongodb_settings: DmsEndpointMongodbSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a>

---

##### `redis_settings`<sup>Required</sup> <a name="redis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```python
redis_settings: DmsEndpointRedisSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `redshift_settings`<sup>Required</sup> <a name="redshift_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```python
redshift_settings: DmsEndpointRedshiftSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `s3_settings`<sup>Required</sup> <a name="s3_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```python
s3_settings: DmsEndpointS3SettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts"></a>

```python
timeouts: DmsEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a>

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `elasticsearch_settings_input`<sup>Optional</sup> <a name="elasticsearch_settings_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```python
elasticsearch_settings_input: DmsEndpointElasticsearchSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `engine_name_input`<sup>Optional</sup> <a name="engine_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```python
engine_name_input: str
```

- *Type:* str

---

##### `extra_connection_attributes_input`<sup>Optional</sup> <a name="extra_connection_attributes_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```python
extra_connection_attributes_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kafka_settings_input`<sup>Optional</sup> <a name="kafka_settings_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```python
kafka_settings_input: DmsEndpointKafkaSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `kinesis_settings_input`<sup>Optional</sup> <a name="kinesis_settings_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```python
kinesis_settings_input: DmsEndpointKinesisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `mongodb_settings_input`<sup>Optional</sup> <a name="mongodb_settings_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput"></a>

```python
mongodb_settings_input: DmsEndpointMongodbSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redis_settings_input`<sup>Optional</sup> <a name="redis_settings_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```python
redis_settings_input: DmsEndpointRedisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `redshift_settings_input`<sup>Optional</sup> <a name="redshift_settings_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```python
redshift_settings_input: DmsEndpointRedshiftSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `s3_settings_input`<sup>Optional</sup> <a name="s3_settings_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```python
s3_settings_input: DmsEndpointS3Settings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `secrets_manager_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_access_role_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput"></a>

```python
secrets_manager_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_arn_input`<sup>Optional</sup> <a name="secrets_manager_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput"></a>

```python
secrets_manager_arn_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `service_access_role_input`<sup>Optional</sup> <a name="service_access_role_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput"></a>

```python
service_access_role_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DmsEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```python
engine_name: str
```

- *Type:* str

---

##### `extra_connection_attributes`<sup>Required</sup> <a name="extra_connection_attributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```python
extra_connection_attributes: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_arn`<sup>Required</sup> <a name="secrets_manager_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn"></a>

```python
secrets_manager_arn: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `service_access_role`<sup>Required</sup> <a name="service_access_role" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole"></a>

```python
service_access_role: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  endpoint_type: str,
  engine_name: str,
  certificate_arn: str = None,
  database_name: str = None,
  elasticsearch_settings: DmsEndpointElasticsearchSettings = None,
  extra_connection_attributes: str = None,
  id: str = None,
  kafka_settings: DmsEndpointKafkaSettings = None,
  kinesis_settings: DmsEndpointKinesisSettings = None,
  kms_key_arn: str = None,
  mongodb_settings: DmsEndpointMongodbSettings = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  redis_settings: DmsEndpointRedisSettings = None,
  redshift_settings: DmsEndpointRedshiftSettings = None,
  s3_settings: DmsEndpointS3Settings = None,
  secrets_manager_access_role_arn: str = None,
  secrets_manager_arn: str = None,
  server_name: str = None,
  service_access_role: str = None,
  ssl_mode: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DmsEndpointTimeouts = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName">engine_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">elasticsearch_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">extra_connection_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">kafka_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">kinesis_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings">mongodb_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings">redis_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">redshift_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.s3Settings">s3_settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | s3_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn">secrets_manager_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole">service_access_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```python
engine_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearch_settings`<sup>Optional</sup> <a name="elasticsearch_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```python
elasticsearch_settings: DmsEndpointElasticsearchSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extra_connection_attributes`<sup>Optional</sup> <a name="extra_connection_attributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```python
extra_connection_attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafka_settings`<sup>Optional</sup> <a name="kafka_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```python
kafka_settings: DmsEndpointKafkaSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesis_settings`<sup>Optional</sup> <a name="kinesis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```python
kinesis_settings: DmsEndpointKinesisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodb_settings`<sup>Optional</sup> <a name="mongodb_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings"></a>

```python
mongodb_settings: DmsEndpointMongodbSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

##### `redis_settings`<sup>Optional</sup> <a name="redis_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```python
redis_settings: DmsEndpointRedisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshift_settings`<sup>Optional</sup> <a name="redshift_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```python
redshift_settings: DmsEndpointRedshiftSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `s3_settings`<sup>Optional</sup> <a name="s3_settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```python
s3_settings: DmsEndpointS3Settings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

s3_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `secrets_manager_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secrets_manager_arn`<sup>Optional</sup> <a name="secrets_manager_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn"></a>

```python
secrets_manager_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `service_access_role`<sup>Optional</sup> <a name="service_access_role" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole"></a>

```python
service_access_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts"></a>

```python
timeouts: DmsEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}.

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointElasticsearchSettings(
  endpoint_uri: str,
  service_access_role_arn: str,
  error_retry_duration: typing.Union[int, float] = None,
  full_load_error_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">error_retry_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">full_load_error_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}. |

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `error_retry_duration`<sup>Optional</sup> <a name="error_retry_duration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```python
error_retry_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

##### `full_load_error_percentage`<sup>Optional</sup> <a name="full_load_error_percentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```python
full_load_error_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointKafkaSettings(
  broker: str,
  include_control_details: typing.Union[bool, IResolvable] = None,
  include_null_and_empty: typing.Union[bool, IResolvable] = None,
  include_partition_value: typing.Union[bool, IResolvable] = None,
  include_table_alter_operations: typing.Union[bool, IResolvable] = None,
  include_transaction_details: typing.Union[bool, IResolvable] = None,
  message_format: str = None,
  message_max_bytes: typing.Union[int, float] = None,
  no_hex_prefix: typing.Union[bool, IResolvable] = None,
  partition_include_schema_table: typing.Union[bool, IResolvable] = None,
  sasl_password: str = None,
  sasl_username: str = None,
  security_protocol: str = None,
  ssl_ca_certificate_arn: str = None,
  ssl_client_certificate_arn: str = None,
  ssl_client_key_arn: str = None,
  ssl_client_key_password: str = None,
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">broker</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">include_control_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">include_null_and_empty</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">include_partition_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">include_table_alter_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">include_transaction_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">message_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">message_max_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">no_hex_prefix</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">partition_include_schema_table</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">sasl_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername">sasl_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">security_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">ssl_ca_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">ssl_client_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">ssl_client_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">ssl_client_key_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}. |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```python
broker: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}.

---

##### `include_control_details`<sup>Optional</sup> <a name="include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```python
include_control_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `include_null_and_empty`<sup>Optional</sup> <a name="include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```python
include_null_and_empty: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `include_partition_value`<sup>Optional</sup> <a name="include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```python
include_partition_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `include_table_alter_operations`<sup>Optional</sup> <a name="include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```python
include_table_alter_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `include_transaction_details`<sup>Optional</sup> <a name="include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```python
include_transaction_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `message_format`<sup>Optional</sup> <a name="message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `message_max_bytes`<sup>Optional</sup> <a name="message_max_bytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```python
message_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

##### `no_hex_prefix`<sup>Optional</sup> <a name="no_hex_prefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```python
no_hex_prefix: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

##### `partition_include_schema_table`<sup>Optional</sup> <a name="partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```python
partition_include_schema_table: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `sasl_password`<sup>Optional</sup> <a name="sasl_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```python
sasl_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

##### `sasl_username`<sup>Optional</sup> <a name="sasl_username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername"></a>

```python
sasl_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

##### `security_protocol`<sup>Optional</sup> <a name="security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

##### `ssl_ca_certificate_arn`<sup>Optional</sup> <a name="ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```python
ssl_ca_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `ssl_client_certificate_arn`<sup>Optional</sup> <a name="ssl_client_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```python
ssl_client_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

##### `ssl_client_key_arn`<sup>Optional</sup> <a name="ssl_client_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```python
ssl_client_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

##### `ssl_client_key_password`<sup>Optional</sup> <a name="ssl_client_key_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```python
ssl_client_key_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}.

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointKinesisSettings(
  include_control_details: typing.Union[bool, IResolvable] = None,
  include_null_and_empty: typing.Union[bool, IResolvable] = None,
  include_partition_value: typing.Union[bool, IResolvable] = None,
  include_table_alter_operations: typing.Union[bool, IResolvable] = None,
  include_transaction_details: typing.Union[bool, IResolvable] = None,
  message_format: str = None,
  partition_include_schema_table: typing.Union[bool, IResolvable] = None,
  service_access_role_arn: str = None,
  stream_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">include_control_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">include_null_and_empty</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">include_partition_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">include_table_alter_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">include_transaction_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">message_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">partition_include_schema_table</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}. |

---

##### `include_control_details`<sup>Optional</sup> <a name="include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```python
include_control_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `include_null_and_empty`<sup>Optional</sup> <a name="include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```python
include_null_and_empty: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `include_partition_value`<sup>Optional</sup> <a name="include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```python
include_partition_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `include_table_alter_operations`<sup>Optional</sup> <a name="include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```python
include_table_alter_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `include_transaction_details`<sup>Optional</sup> <a name="include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```python
include_transaction_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `message_format`<sup>Optional</sup> <a name="message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `partition_include_schema_table`<sup>Optional</sup> <a name="partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```python
partition_include_schema_table: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `service_access_role_arn`<sup>Optional</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

### DmsEndpointMongodbSettings <a name="DmsEndpointMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointMongodbSettings(
  auth_mechanism: str = None,
  auth_source: str = None,
  auth_type: str = None,
  docs_to_investigate: str = None,
  extract_doc_id: str = None,
  nesting_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism">auth_mechanism</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource">auth_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate">docs_to_investigate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId">extract_doc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel">nesting_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}. |

---

##### `auth_mechanism`<sup>Optional</sup> <a name="auth_mechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism"></a>

```python
auth_mechanism: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

##### `auth_source`<sup>Optional</sup> <a name="auth_source" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource"></a>

```python
auth_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `docs_to_investigate`<sup>Optional</sup> <a name="docs_to_investigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate"></a>

```python
docs_to_investigate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

##### `extract_doc_id`<sup>Optional</sup> <a name="extract_doc_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId"></a>

```python
extract_doc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

##### `nesting_level`<sup>Optional</sup> <a name="nesting_level" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel"></a>

```python
nesting_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointRedisSettings(
  auth_type: str,
  port: typing.Union[int, float],
  server_name: str,
  auth_password: str = None,
  auth_user_name: str = None,
  ssl_ca_certificate_arn: str = None,
  ssl_security_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">auth_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">auth_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">ssl_ca_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">ssl_security_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `auth_password`<sup>Optional</sup> <a name="auth_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```python
auth_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}.

---

##### `auth_user_name`<sup>Optional</sup> <a name="auth_user_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```python
auth_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}.

---

##### `ssl_ca_certificate_arn`<sup>Optional</sup> <a name="ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```python
ssl_ca_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `ssl_security_protocol`<sup>Optional</sup> <a name="ssl_security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```python
ssl_security_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}.

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointRedshiftSettings(
  bucket_folder: str = None,
  bucket_name: str = None,
  encryption_mode: str = None,
  server_side_encryption_kms_key_id: str = None,
  service_access_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |

---

##### `bucket_folder`<sup>Optional</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `server_side_encryption_kms_key_id`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `service_access_role_arn`<sup>Optional</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointS3Settings(
  add_column_name: typing.Union[bool, IResolvable] = None,
  bucket_folder: str = None,
  bucket_name: str = None,
  canned_acl_for_objects: str = None,
  cdc_inserts_and_updates: typing.Union[bool, IResolvable] = None,
  cdc_inserts_only: typing.Union[bool, IResolvable] = None,
  cdc_max_batch_interval: typing.Union[int, float] = None,
  cdc_min_file_size: typing.Union[int, float] = None,
  cdc_path: str = None,
  compression_type: str = None,
  csv_delimiter: str = None,
  csv_no_sup_value: str = None,
  csv_null_value: str = None,
  csv_row_delimiter: str = None,
  data_format: str = None,
  data_page_size: typing.Union[int, float] = None,
  date_partition_delimiter: str = None,
  date_partition_enabled: typing.Union[bool, IResolvable] = None,
  date_partition_sequence: str = None,
  dict_page_size_limit: typing.Union[int, float] = None,
  enable_statistics: typing.Union[bool, IResolvable] = None,
  encoding_type: str = None,
  encryption_mode: str = None,
  external_table_definition: str = None,
  ignore_header_rows: typing.Union[int, float] = None,
  ignore_headers_row: typing.Union[int, float] = None,
  include_op_for_full_load: typing.Union[bool, IResolvable] = None,
  max_file_size: typing.Union[int, float] = None,
  parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable] = None,
  parquet_version: str = None,
  preserve_transactions: typing.Union[bool, IResolvable] = None,
  rfc4180: typing.Union[bool, IResolvable] = None,
  row_group_length: typing.Union[int, float] = None,
  server_side_encryption_kms_key_id: str = None,
  service_access_role_arn: str = None,
  timestamp_column_name: str = None,
  use_csv_no_sup_value: typing.Union[bool, IResolvable] = None,
  use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName">add_column_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects">canned_acl_for_objects</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates">cdc_inserts_and_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly">cdc_inserts_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval">cdc_max_batch_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize">cdc_min_file_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath">cdc_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">csv_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue">csv_no_sup_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue">csv_null_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">csv_row_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">data_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize">data_page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter">date_partition_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">date_partition_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence">date_partition_sequence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit">dict_page_size_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics">enable_statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encodingType">encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">external_table_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows">ignore_header_rows</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeadersRow">ignore_headers_row</a></code> | <code>typing.Union[int, float]</code> | This setting has no effect, is deprecated, and will be removed in a future version. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad">include_op_for_full_load</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">parquet_timestamp_in_millisecond</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">parquet_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions">preserve_transactions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180">rfc4180</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength">row_group_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName">timestamp_column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue">use_csv_no_sup_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp">use_task_start_time_for_full_load_timestamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `add_column_name`<sup>Optional</sup> <a name="add_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName"></a>

```python
add_column_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}.

---

##### `bucket_folder`<sup>Optional</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `canned_acl_for_objects`<sup>Optional</sup> <a name="canned_acl_for_objects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects"></a>

```python
canned_acl_for_objects: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}.

---

##### `cdc_inserts_and_updates`<sup>Optional</sup> <a name="cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

```python
cdc_inserts_and_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}.

---

##### `cdc_inserts_only`<sup>Optional</sup> <a name="cdc_inserts_only" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly"></a>

```python
cdc_inserts_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}.

---

##### `cdc_max_batch_interval`<sup>Optional</sup> <a name="cdc_max_batch_interval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval"></a>

```python
cdc_max_batch_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}.

---

##### `cdc_min_file_size`<sup>Optional</sup> <a name="cdc_min_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize"></a>

```python
cdc_min_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}.

---

##### `cdc_path`<sup>Optional</sup> <a name="cdc_path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath"></a>

```python
cdc_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}.

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}.

---

##### `csv_delimiter`<sup>Optional</sup> <a name="csv_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```python
csv_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}.

---

##### `csv_no_sup_value`<sup>Optional</sup> <a name="csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue"></a>

```python
csv_no_sup_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}.

---

##### `csv_null_value`<sup>Optional</sup> <a name="csv_null_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue"></a>

```python
csv_null_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}.

---

##### `csv_row_delimiter`<sup>Optional</sup> <a name="csv_row_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```python
csv_row_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}.

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}.

---

##### `data_page_size`<sup>Optional</sup> <a name="data_page_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize"></a>

```python
data_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}.

---

##### `date_partition_delimiter`<sup>Optional</sup> <a name="date_partition_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter"></a>

```python
date_partition_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}.

---

##### `date_partition_enabled`<sup>Optional</sup> <a name="date_partition_enabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```python
date_partition_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}.

---

##### `date_partition_sequence`<sup>Optional</sup> <a name="date_partition_sequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence"></a>

```python
date_partition_sequence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}.

---

##### `dict_page_size_limit`<sup>Optional</sup> <a name="dict_page_size_limit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit"></a>

```python
dict_page_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}.

---

##### `enable_statistics`<sup>Optional</sup> <a name="enable_statistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics"></a>

```python
enable_statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}.

---

##### `encoding_type`<sup>Optional</sup> <a name="encoding_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}.

---

##### `encryption_mode`<sup>Optional</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `external_table_definition`<sup>Optional</sup> <a name="external_table_definition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```python
external_table_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}.

---

##### `ignore_header_rows`<sup>Optional</sup> <a name="ignore_header_rows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows"></a>

```python
ignore_header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}.

---

##### `ignore_headers_row`<sup>Optional</sup> <a name="ignore_headers_row" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeadersRow"></a>

```python
ignore_headers_row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This setting has no effect, is deprecated, and will be removed in a future version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_headers_row DmsEndpoint#ignore_headers_row}

---

##### `include_op_for_full_load`<sup>Optional</sup> <a name="include_op_for_full_load" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad"></a>

```python
include_op_for_full_load: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}.

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `parquet_timestamp_in_millisecond`<sup>Optional</sup> <a name="parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```python
parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}.

---

##### `parquet_version`<sup>Optional</sup> <a name="parquet_version" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```python
parquet_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}.

---

##### `preserve_transactions`<sup>Optional</sup> <a name="preserve_transactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions"></a>

```python
preserve_transactions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}.

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180"></a>

```python
rfc4180: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}.

---

##### `row_group_length`<sup>Optional</sup> <a name="row_group_length" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength"></a>

```python
row_group_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}.

---

##### `server_side_encryption_kms_key_id`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `service_access_role_arn`<sup>Optional</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `timestamp_column_name`<sup>Optional</sup> <a name="timestamp_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName"></a>

```python
timestamp_column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}.

---

##### `use_csv_no_sup_value`<sup>Optional</sup> <a name="use_csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue"></a>

```python
use_csv_no_sup_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}.

---

##### `use_task_start_time_for_full_load_timestamp`<sup>Optional</sup> <a name="use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```python
use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsEndpointTimeouts <a name="DmsEndpointTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">reset_error_retry_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">reset_full_load_error_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_retry_duration` <a name="reset_error_retry_duration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```python
def reset_error_retry_duration() -> None
```

##### `reset_full_load_error_percentage` <a name="reset_full_load_error_percentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```python
def reset_full_load_error_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">endpoint_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">error_retry_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">full_load_error_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">service_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">error_retry_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">full_load_error_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_uri_input`<sup>Optional</sup> <a name="endpoint_uri_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```python
endpoint_uri_input: str
```

- *Type:* str

---

##### `error_retry_duration_input`<sup>Optional</sup> <a name="error_retry_duration_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```python
error_retry_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `full_load_error_percentage_input`<sup>Optional</sup> <a name="full_load_error_percentage_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```python
full_load_error_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_access_role_arn_input`<sup>Optional</sup> <a name="service_access_role_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```python
service_access_role_arn_input: str
```

- *Type:* str

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `error_retry_duration`<sup>Required</sup> <a name="error_retry_duration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```python
error_retry_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `full_load_error_percentage`<sup>Required</sup> <a name="full_load_error_percentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```python
full_load_error_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DmsEndpointElasticsearchSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointKafkaSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">reset_include_control_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">reset_include_null_and_empty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">reset_include_partition_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">reset_include_table_alter_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">reset_include_transaction_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">reset_message_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">reset_message_max_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">reset_no_hex_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">reset_partition_include_schema_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">reset_sasl_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername">reset_sasl_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">reset_security_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">reset_ssl_ca_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">reset_ssl_client_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">reset_ssl_client_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">reset_ssl_client_key_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_control_details` <a name="reset_include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```python
def reset_include_control_details() -> None
```

##### `reset_include_null_and_empty` <a name="reset_include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```python
def reset_include_null_and_empty() -> None
```

##### `reset_include_partition_value` <a name="reset_include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```python
def reset_include_partition_value() -> None
```

##### `reset_include_table_alter_operations` <a name="reset_include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```python
def reset_include_table_alter_operations() -> None
```

##### `reset_include_transaction_details` <a name="reset_include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```python
def reset_include_transaction_details() -> None
```

##### `reset_message_format` <a name="reset_message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```python
def reset_message_format() -> None
```

##### `reset_message_max_bytes` <a name="reset_message_max_bytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```python
def reset_message_max_bytes() -> None
```

##### `reset_no_hex_prefix` <a name="reset_no_hex_prefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```python
def reset_no_hex_prefix() -> None
```

##### `reset_partition_include_schema_table` <a name="reset_partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```python
def reset_partition_include_schema_table() -> None
```

##### `reset_sasl_password` <a name="reset_sasl_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```python
def reset_sasl_password() -> None
```

##### `reset_sasl_username` <a name="reset_sasl_username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername"></a>

```python
def reset_sasl_username() -> None
```

##### `reset_security_protocol` <a name="reset_security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```python
def reset_security_protocol() -> None
```

##### `reset_ssl_ca_certificate_arn` <a name="reset_ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```python
def reset_ssl_ca_certificate_arn() -> None
```

##### `reset_ssl_client_certificate_arn` <a name="reset_ssl_client_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```python
def reset_ssl_client_certificate_arn() -> None
```

##### `reset_ssl_client_key_arn` <a name="reset_ssl_client_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```python
def reset_ssl_client_key_arn() -> None
```

##### `reset_ssl_client_key_password` <a name="reset_ssl_client_key_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```python
def reset_ssl_client_key_password() -> None
```

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">broker_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">include_control_details_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">include_null_and_empty_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">include_partition_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">include_table_alter_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">include_transaction_details_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">message_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">message_max_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">no_hex_prefix_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">partition_include_schema_table_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">sasl_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput">sasl_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">security_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">ssl_ca_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">ssl_client_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">ssl_client_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">ssl_client_key_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">include_control_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">include_null_and_empty</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">include_partition_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">include_table_alter_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">include_transaction_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">message_max_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">no_hex_prefix</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partition_include_schema_table</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">sasl_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername">sasl_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">security_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">ssl_ca_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">ssl_client_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">ssl_client_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">ssl_client_key_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `broker_input`<sup>Optional</sup> <a name="broker_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```python
broker_input: str
```

- *Type:* str

---

##### `include_control_details_input`<sup>Optional</sup> <a name="include_control_details_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```python
include_control_details_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_null_and_empty_input`<sup>Optional</sup> <a name="include_null_and_empty_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```python
include_null_and_empty_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_partition_value_input`<sup>Optional</sup> <a name="include_partition_value_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```python
include_partition_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_table_alter_operations_input`<sup>Optional</sup> <a name="include_table_alter_operations_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```python
include_table_alter_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_transaction_details_input`<sup>Optional</sup> <a name="include_transaction_details_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```python
include_transaction_details_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format_input`<sup>Optional</sup> <a name="message_format_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```python
message_format_input: str
```

- *Type:* str

---

##### `message_max_bytes_input`<sup>Optional</sup> <a name="message_max_bytes_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```python
message_max_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_hex_prefix_input`<sup>Optional</sup> <a name="no_hex_prefix_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```python
no_hex_prefix_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_include_schema_table_input`<sup>Optional</sup> <a name="partition_include_schema_table_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```python
partition_include_schema_table_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sasl_password_input`<sup>Optional</sup> <a name="sasl_password_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```python
sasl_password_input: str
```

- *Type:* str

---

##### `sasl_username_input`<sup>Optional</sup> <a name="sasl_username_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput"></a>

```python
sasl_username_input: str
```

- *Type:* str

---

##### `security_protocol_input`<sup>Optional</sup> <a name="security_protocol_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```python
security_protocol_input: str
```

- *Type:* str

---

##### `ssl_ca_certificate_arn_input`<sup>Optional</sup> <a name="ssl_ca_certificate_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```python
ssl_ca_certificate_arn_input: str
```

- *Type:* str

---

##### `ssl_client_certificate_arn_input`<sup>Optional</sup> <a name="ssl_client_certificate_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```python
ssl_client_certificate_arn_input: str
```

- *Type:* str

---

##### `ssl_client_key_arn_input`<sup>Optional</sup> <a name="ssl_client_key_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```python
ssl_client_key_arn_input: str
```

- *Type:* str

---

##### `ssl_client_key_password_input`<sup>Optional</sup> <a name="ssl_client_key_password_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```python
ssl_client_key_password_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```python
broker: str
```

- *Type:* str

---

##### `include_control_details`<sup>Required</sup> <a name="include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```python
include_control_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_null_and_empty`<sup>Required</sup> <a name="include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```python
include_null_and_empty: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_partition_value`<sup>Required</sup> <a name="include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```python
include_partition_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_table_alter_operations`<sup>Required</sup> <a name="include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```python
include_table_alter_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_transaction_details`<sup>Required</sup> <a name="include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```python
include_transaction_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format`<sup>Required</sup> <a name="message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

---

##### `message_max_bytes`<sup>Required</sup> <a name="message_max_bytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```python
message_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_hex_prefix`<sup>Required</sup> <a name="no_hex_prefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```python
no_hex_prefix: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_include_schema_table`<sup>Required</sup> <a name="partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```python
partition_include_schema_table: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sasl_password`<sup>Required</sup> <a name="sasl_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```python
sasl_password: str
```

- *Type:* str

---

##### `sasl_username`<sup>Required</sup> <a name="sasl_username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```python
sasl_username: str
```

- *Type:* str

---

##### `security_protocol`<sup>Required</sup> <a name="security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

---

##### `ssl_ca_certificate_arn`<sup>Required</sup> <a name="ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```python
ssl_ca_certificate_arn: str
```

- *Type:* str

---

##### `ssl_client_certificate_arn`<sup>Required</sup> <a name="ssl_client_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```python
ssl_client_certificate_arn: str
```

- *Type:* str

---

##### `ssl_client_key_arn`<sup>Required</sup> <a name="ssl_client_key_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```python
ssl_client_key_arn: str
```

- *Type:* str

---

##### `ssl_client_key_password`<sup>Required</sup> <a name="ssl_client_key_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```python
ssl_client_key_password: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DmsEndpointKafkaSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointKinesisSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">reset_include_control_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">reset_include_null_and_empty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">reset_include_partition_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">reset_include_table_alter_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">reset_include_transaction_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">reset_message_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">reset_partition_include_schema_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">reset_service_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">reset_stream_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_control_details` <a name="reset_include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```python
def reset_include_control_details() -> None
```

##### `reset_include_null_and_empty` <a name="reset_include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```python
def reset_include_null_and_empty() -> None
```

##### `reset_include_partition_value` <a name="reset_include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```python
def reset_include_partition_value() -> None
```

##### `reset_include_table_alter_operations` <a name="reset_include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```python
def reset_include_table_alter_operations() -> None
```

##### `reset_include_transaction_details` <a name="reset_include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```python
def reset_include_transaction_details() -> None
```

##### `reset_message_format` <a name="reset_message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```python
def reset_message_format() -> None
```

##### `reset_partition_include_schema_table` <a name="reset_partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```python
def reset_partition_include_schema_table() -> None
```

##### `reset_service_access_role_arn` <a name="reset_service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```python
def reset_service_access_role_arn() -> None
```

##### `reset_stream_arn` <a name="reset_stream_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```python
def reset_stream_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">include_control_details_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">include_null_and_empty_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">include_partition_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">include_table_alter_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">include_transaction_details_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">message_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">partition_include_schema_table_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">service_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">include_control_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">include_null_and_empty</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">include_partition_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">include_table_alter_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">include_transaction_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partition_include_schema_table</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_control_details_input`<sup>Optional</sup> <a name="include_control_details_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```python
include_control_details_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_null_and_empty_input`<sup>Optional</sup> <a name="include_null_and_empty_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```python
include_null_and_empty_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_partition_value_input`<sup>Optional</sup> <a name="include_partition_value_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```python
include_partition_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_table_alter_operations_input`<sup>Optional</sup> <a name="include_table_alter_operations_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```python
include_table_alter_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_transaction_details_input`<sup>Optional</sup> <a name="include_transaction_details_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```python
include_transaction_details_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format_input`<sup>Optional</sup> <a name="message_format_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```python
message_format_input: str
```

- *Type:* str

---

##### `partition_include_schema_table_input`<sup>Optional</sup> <a name="partition_include_schema_table_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```python
partition_include_schema_table_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_access_role_arn_input`<sup>Optional</sup> <a name="service_access_role_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```python
service_access_role_arn_input: str
```

- *Type:* str

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `include_control_details`<sup>Required</sup> <a name="include_control_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```python
include_control_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_null_and_empty`<sup>Required</sup> <a name="include_null_and_empty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```python
include_null_and_empty: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_partition_value`<sup>Required</sup> <a name="include_partition_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```python
include_partition_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_table_alter_operations`<sup>Required</sup> <a name="include_table_alter_operations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```python
include_table_alter_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_transaction_details`<sup>Required</sup> <a name="include_transaction_details" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```python
include_transaction_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_format`<sup>Required</sup> <a name="message_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

---

##### `partition_include_schema_table`<sup>Required</sup> <a name="partition_include_schema_table" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```python
partition_include_schema_table: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DmsEndpointKinesisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMongodbSettingsOutputReference <a name="DmsEndpointMongodbSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointMongodbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism">reset_auth_mechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource">reset_auth_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate">reset_docs_to_investigate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId">reset_extract_doc_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel">reset_nesting_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_mechanism` <a name="reset_auth_mechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism"></a>

```python
def reset_auth_mechanism() -> None
```

##### `reset_auth_source` <a name="reset_auth_source" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource"></a>

```python
def reset_auth_source() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_docs_to_investigate` <a name="reset_docs_to_investigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate"></a>

```python
def reset_docs_to_investigate() -> None
```

##### `reset_extract_doc_id` <a name="reset_extract_doc_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId"></a>

```python
def reset_extract_doc_id() -> None
```

##### `reset_nesting_level` <a name="reset_nesting_level" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel"></a>

```python
def reset_nesting_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput">auth_mechanism_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput">auth_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput">docs_to_investigate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput">extract_doc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput">nesting_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism">auth_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource">auth_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">docs_to_investigate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId">extract_doc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel">nesting_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_mechanism_input`<sup>Optional</sup> <a name="auth_mechanism_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput"></a>

```python
auth_mechanism_input: str
```

- *Type:* str

---

##### `auth_source_input`<sup>Optional</sup> <a name="auth_source_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput"></a>

```python
auth_source_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `docs_to_investigate_input`<sup>Optional</sup> <a name="docs_to_investigate_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput"></a>

```python
docs_to_investigate_input: str
```

- *Type:* str

---

##### `extract_doc_id_input`<sup>Optional</sup> <a name="extract_doc_id_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput"></a>

```python
extract_doc_id_input: str
```

- *Type:* str

---

##### `nesting_level_input`<sup>Optional</sup> <a name="nesting_level_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput"></a>

```python
nesting_level_input: str
```

- *Type:* str

---

##### `auth_mechanism`<sup>Required</sup> <a name="auth_mechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```python
auth_mechanism: str
```

- *Type:* str

---

##### `auth_source`<sup>Required</sup> <a name="auth_source" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```python
auth_source: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `docs_to_investigate`<sup>Required</sup> <a name="docs_to_investigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```python
docs_to_investigate: str
```

- *Type:* str

---

##### `extract_doc_id`<sup>Required</sup> <a name="extract_doc_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```python
extract_doc_id: str
```

- *Type:* str

---

##### `nesting_level`<sup>Required</sup> <a name="nesting_level" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```python
nesting_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DmsEndpointMongodbSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointRedisSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">reset_auth_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">reset_auth_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">reset_ssl_ca_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">reset_ssl_security_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_password` <a name="reset_auth_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```python
def reset_auth_password() -> None
```

##### `reset_auth_user_name` <a name="reset_auth_user_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```python
def reset_auth_user_name() -> None
```

##### `reset_ssl_ca_certificate_arn` <a name="reset_ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```python
def reset_ssl_ca_certificate_arn() -> None
```

##### `reset_ssl_security_protocol` <a name="reset_ssl_security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```python
def reset_ssl_security_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">auth_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">auth_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">ssl_ca_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">ssl_security_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">auth_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">auth_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">ssl_ca_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">ssl_security_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_password_input`<sup>Optional</sup> <a name="auth_password_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```python
auth_password_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_user_name_input`<sup>Optional</sup> <a name="auth_user_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```python
auth_user_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_ca_certificate_arn_input`<sup>Optional</sup> <a name="ssl_ca_certificate_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```python
ssl_ca_certificate_arn_input: str
```

- *Type:* str

---

##### `ssl_security_protocol_input`<sup>Optional</sup> <a name="ssl_security_protocol_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```python
ssl_security_protocol_input: str
```

- *Type:* str

---

##### `auth_password`<sup>Required</sup> <a name="auth_password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```python
auth_password: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `auth_user_name`<sup>Required</sup> <a name="auth_user_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```python
auth_user_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_ca_certificate_arn`<sup>Required</sup> <a name="ssl_ca_certificate_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```python
ssl_ca_certificate_arn: str
```

- *Type:* str

---

##### `ssl_security_protocol`<sup>Required</sup> <a name="ssl_security_protocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```python
ssl_security_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DmsEndpointRedisSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">reset_bucket_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">reset_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">reset_server_side_encryption_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">reset_service_access_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_folder` <a name="reset_bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```python
def reset_bucket_folder() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_encryption_mode` <a name="reset_encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```python
def reset_encryption_mode() -> None
```

##### `reset_server_side_encryption_kms_key_id` <a name="reset_server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```python
def reset_server_side_encryption_kms_key_id() -> None
```

##### `reset_service_access_role_arn` <a name="reset_service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```python
def reset_service_access_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">bucket_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">server_side_encryption_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">service_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_folder_input`<sup>Optional</sup> <a name="bucket_folder_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```python
bucket_folder_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `encryption_mode_input`<sup>Optional</sup> <a name="encryption_mode_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```python
encryption_mode_input: str
```

- *Type:* str

---

##### `server_side_encryption_kms_key_id_input`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```python
server_side_encryption_kms_key_id_input: str
```

- *Type:* str

---

##### `service_access_role_arn_input`<sup>Optional</sup> <a name="service_access_role_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```python
service_access_role_arn_input: str
```

- *Type:* str

---

##### `bucket_folder`<sup>Required</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `server_side_encryption_kms_key_id`<sup>Required</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DmsEndpointRedshiftSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointS3SettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName">reset_add_column_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder">reset_bucket_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects">reset_canned_acl_for_objects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates">reset_cdc_inserts_and_updates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly">reset_cdc_inserts_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval">reset_cdc_max_batch_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize">reset_cdc_min_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath">reset_cdc_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter">reset_csv_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue">reset_csv_no_sup_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue">reset_csv_null_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter">reset_csv_row_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat">reset_data_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize">reset_data_page_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter">reset_date_partition_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled">reset_date_partition_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence">reset_date_partition_sequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit">reset_dict_page_size_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics">reset_enable_statistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType">reset_encoding_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode">reset_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition">reset_external_table_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows">reset_ignore_header_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeadersRow">reset_ignore_headers_row</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad">reset_include_op_for_full_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize">reset_max_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond">reset_parquet_timestamp_in_millisecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion">reset_parquet_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions">reset_preserve_transactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180">reset_rfc4180</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength">reset_row_group_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId">reset_server_side_encryption_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn">reset_service_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName">reset_timestamp_column_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue">reset_use_csv_no_sup_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp">reset_use_task_start_time_for_full_load_timestamp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add_column_name` <a name="reset_add_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName"></a>

```python
def reset_add_column_name() -> None
```

##### `reset_bucket_folder` <a name="reset_bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```python
def reset_bucket_folder() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_canned_acl_for_objects` <a name="reset_canned_acl_for_objects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects"></a>

```python
def reset_canned_acl_for_objects() -> None
```

##### `reset_cdc_inserts_and_updates` <a name="reset_cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates"></a>

```python
def reset_cdc_inserts_and_updates() -> None
```

##### `reset_cdc_inserts_only` <a name="reset_cdc_inserts_only" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly"></a>

```python
def reset_cdc_inserts_only() -> None
```

##### `reset_cdc_max_batch_interval` <a name="reset_cdc_max_batch_interval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval"></a>

```python
def reset_cdc_max_batch_interval() -> None
```

##### `reset_cdc_min_file_size` <a name="reset_cdc_min_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize"></a>

```python
def reset_cdc_min_file_size() -> None
```

##### `reset_cdc_path` <a name="reset_cdc_path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath"></a>

```python
def reset_cdc_path() -> None
```

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_csv_delimiter` <a name="reset_csv_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```python
def reset_csv_delimiter() -> None
```

##### `reset_csv_no_sup_value` <a name="reset_csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue"></a>

```python
def reset_csv_no_sup_value() -> None
```

##### `reset_csv_null_value` <a name="reset_csv_null_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue"></a>

```python
def reset_csv_null_value() -> None
```

##### `reset_csv_row_delimiter` <a name="reset_csv_row_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```python
def reset_csv_row_delimiter() -> None
```

##### `reset_data_format` <a name="reset_data_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```python
def reset_data_format() -> None
```

##### `reset_data_page_size` <a name="reset_data_page_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize"></a>

```python
def reset_data_page_size() -> None
```

##### `reset_date_partition_delimiter` <a name="reset_date_partition_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter"></a>

```python
def reset_date_partition_delimiter() -> None
```

##### `reset_date_partition_enabled` <a name="reset_date_partition_enabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```python
def reset_date_partition_enabled() -> None
```

##### `reset_date_partition_sequence` <a name="reset_date_partition_sequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence"></a>

```python
def reset_date_partition_sequence() -> None
```

##### `reset_dict_page_size_limit` <a name="reset_dict_page_size_limit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit"></a>

```python
def reset_dict_page_size_limit() -> None
```

##### `reset_enable_statistics` <a name="reset_enable_statistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics"></a>

```python
def reset_enable_statistics() -> None
```

##### `reset_encoding_type` <a name="reset_encoding_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType"></a>

```python
def reset_encoding_type() -> None
```

##### `reset_encryption_mode` <a name="reset_encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```python
def reset_encryption_mode() -> None
```

##### `reset_external_table_definition` <a name="reset_external_table_definition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```python
def reset_external_table_definition() -> None
```

##### `reset_ignore_header_rows` <a name="reset_ignore_header_rows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows"></a>

```python
def reset_ignore_header_rows() -> None
```

##### `reset_ignore_headers_row` <a name="reset_ignore_headers_row" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeadersRow"></a>

```python
def reset_ignore_headers_row() -> None
```

##### `reset_include_op_for_full_load` <a name="reset_include_op_for_full_load" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad"></a>

```python
def reset_include_op_for_full_load() -> None
```

##### `reset_max_file_size` <a name="reset_max_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize"></a>

```python
def reset_max_file_size() -> None
```

##### `reset_parquet_timestamp_in_millisecond` <a name="reset_parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```python
def reset_parquet_timestamp_in_millisecond() -> None
```

##### `reset_parquet_version` <a name="reset_parquet_version" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```python
def reset_parquet_version() -> None
```

##### `reset_preserve_transactions` <a name="reset_preserve_transactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions"></a>

```python
def reset_preserve_transactions() -> None
```

##### `reset_rfc4180` <a name="reset_rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180"></a>

```python
def reset_rfc4180() -> None
```

##### `reset_row_group_length` <a name="reset_row_group_length" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength"></a>

```python
def reset_row_group_length() -> None
```

##### `reset_server_side_encryption_kms_key_id` <a name="reset_server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```python
def reset_server_side_encryption_kms_key_id() -> None
```

##### `reset_service_access_role_arn` <a name="reset_service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```python
def reset_service_access_role_arn() -> None
```

##### `reset_timestamp_column_name` <a name="reset_timestamp_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName"></a>

```python
def reset_timestamp_column_name() -> None
```

##### `reset_use_csv_no_sup_value` <a name="reset_use_csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue"></a>

```python
def reset_use_csv_no_sup_value() -> None
```

##### `reset_use_task_start_time_for_full_load_timestamp` <a name="reset_use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```python
def reset_use_task_start_time_for_full_load_timestamp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput">add_column_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">bucket_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput">canned_acl_for_objects_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput">cdc_inserts_and_updates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput">cdc_inserts_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput">cdc_max_batch_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput">cdc_min_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput">cdc_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">csv_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput">csv_no_sup_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput">csv_null_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">csv_row_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">data_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput">data_page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput">date_partition_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">date_partition_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput">date_partition_sequence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput">dict_page_size_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput">enable_statistics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput">encoding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">external_table_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput">ignore_header_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRowInput">ignore_headers_row_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput">include_op_for_full_load_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput">max_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">parquet_timestamp_in_millisecond_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">parquet_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput">preserve_transactions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input">rfc4180_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput">row_group_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">server_side_encryption_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">service_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput">timestamp_column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput">use_csv_no_sup_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput">use_task_start_time_for_full_load_timestamp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName">add_column_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">bucket_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">canned_acl_for_objects</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">cdc_inserts_and_updates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">cdc_inserts_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">cdc_max_batch_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">cdc_min_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath">cdc_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">csv_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue">csv_no_sup_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue">csv_null_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">csv_row_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize">data_page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">date_partition_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">date_partition_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence">date_partition_sequence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">dict_page_size_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics">enable_statistics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType">encoding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">external_table_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">ignore_header_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow">ignore_headers_row</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">include_op_for_full_load</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">parquet_timestamp_in_millisecond</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">parquet_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions">preserve_transactions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180">rfc4180</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength">row_group_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">server_side_encryption_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">service_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName">timestamp_column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">use_csv_no_sup_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">use_task_start_time_for_full_load_timestamp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_column_name_input`<sup>Optional</sup> <a name="add_column_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput"></a>

```python
add_column_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_folder_input`<sup>Optional</sup> <a name="bucket_folder_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```python
bucket_folder_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `canned_acl_for_objects_input`<sup>Optional</sup> <a name="canned_acl_for_objects_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput"></a>

```python
canned_acl_for_objects_input: str
```

- *Type:* str

---

##### `cdc_inserts_and_updates_input`<sup>Optional</sup> <a name="cdc_inserts_and_updates_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput"></a>

```python
cdc_inserts_and_updates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_inserts_only_input`<sup>Optional</sup> <a name="cdc_inserts_only_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput"></a>

```python
cdc_inserts_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_max_batch_interval_input`<sup>Optional</sup> <a name="cdc_max_batch_interval_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput"></a>

```python
cdc_max_batch_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_min_file_size_input`<sup>Optional</sup> <a name="cdc_min_file_size_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput"></a>

```python
cdc_min_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_path_input`<sup>Optional</sup> <a name="cdc_path_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput"></a>

```python
cdc_path_input: str
```

- *Type:* str

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `csv_delimiter_input`<sup>Optional</sup> <a name="csv_delimiter_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```python
csv_delimiter_input: str
```

- *Type:* str

---

##### `csv_no_sup_value_input`<sup>Optional</sup> <a name="csv_no_sup_value_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput"></a>

```python
csv_no_sup_value_input: str
```

- *Type:* str

---

##### `csv_null_value_input`<sup>Optional</sup> <a name="csv_null_value_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput"></a>

```python
csv_null_value_input: str
```

- *Type:* str

---

##### `csv_row_delimiter_input`<sup>Optional</sup> <a name="csv_row_delimiter_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```python
csv_row_delimiter_input: str
```

- *Type:* str

---

##### `data_format_input`<sup>Optional</sup> <a name="data_format_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```python
data_format_input: str
```

- *Type:* str

---

##### `data_page_size_input`<sup>Optional</sup> <a name="data_page_size_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput"></a>

```python
data_page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_partition_delimiter_input`<sup>Optional</sup> <a name="date_partition_delimiter_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput"></a>

```python
date_partition_delimiter_input: str
```

- *Type:* str

---

##### `date_partition_enabled_input`<sup>Optional</sup> <a name="date_partition_enabled_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```python
date_partition_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date_partition_sequence_input`<sup>Optional</sup> <a name="date_partition_sequence_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput"></a>

```python
date_partition_sequence_input: str
```

- *Type:* str

---

##### `dict_page_size_limit_input`<sup>Optional</sup> <a name="dict_page_size_limit_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput"></a>

```python
dict_page_size_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_statistics_input`<sup>Optional</sup> <a name="enable_statistics_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput"></a>

```python
enable_statistics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_type_input`<sup>Optional</sup> <a name="encoding_type_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput"></a>

```python
encoding_type_input: str
```

- *Type:* str

---

##### `encryption_mode_input`<sup>Optional</sup> <a name="encryption_mode_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```python
encryption_mode_input: str
```

- *Type:* str

---

##### `external_table_definition_input`<sup>Optional</sup> <a name="external_table_definition_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```python
external_table_definition_input: str
```

- *Type:* str

---

##### `ignore_header_rows_input`<sup>Optional</sup> <a name="ignore_header_rows_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput"></a>

```python
ignore_header_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_headers_row_input`<sup>Optional</sup> <a name="ignore_headers_row_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRowInput"></a>

```python
ignore_headers_row_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_op_for_full_load_input`<sup>Optional</sup> <a name="include_op_for_full_load_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput"></a>

```python
include_op_for_full_load_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_file_size_input`<sup>Optional</sup> <a name="max_file_size_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput"></a>

```python
max_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parquet_timestamp_in_millisecond_input`<sup>Optional</sup> <a name="parquet_timestamp_in_millisecond_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```python
parquet_timestamp_in_millisecond_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parquet_version_input`<sup>Optional</sup> <a name="parquet_version_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```python
parquet_version_input: str
```

- *Type:* str

---

##### `preserve_transactions_input`<sup>Optional</sup> <a name="preserve_transactions_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput"></a>

```python
preserve_transactions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rfc4180_input`<sup>Optional</sup> <a name="rfc4180_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input"></a>

```python
rfc4180_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `row_group_length_input`<sup>Optional</sup> <a name="row_group_length_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput"></a>

```python
row_group_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_side_encryption_kms_key_id_input`<sup>Optional</sup> <a name="server_side_encryption_kms_key_id_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```python
server_side_encryption_kms_key_id_input: str
```

- *Type:* str

---

##### `service_access_role_arn_input`<sup>Optional</sup> <a name="service_access_role_arn_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```python
service_access_role_arn_input: str
```

- *Type:* str

---

##### `timestamp_column_name_input`<sup>Optional</sup> <a name="timestamp_column_name_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput"></a>

```python
timestamp_column_name_input: str
```

- *Type:* str

---

##### `use_csv_no_sup_value_input`<sup>Optional</sup> <a name="use_csv_no_sup_value_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput"></a>

```python
use_csv_no_sup_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_task_start_time_for_full_load_timestamp_input`<sup>Optional</sup> <a name="use_task_start_time_for_full_load_timestamp_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```python
use_task_start_time_for_full_load_timestamp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `add_column_name`<sup>Required</sup> <a name="add_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```python
add_column_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_folder`<sup>Required</sup> <a name="bucket_folder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```python
bucket_folder: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `canned_acl_for_objects`<sup>Required</sup> <a name="canned_acl_for_objects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```python
canned_acl_for_objects: str
```

- *Type:* str

---

##### `cdc_inserts_and_updates`<sup>Required</sup> <a name="cdc_inserts_and_updates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```python
cdc_inserts_and_updates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_inserts_only`<sup>Required</sup> <a name="cdc_inserts_only" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```python
cdc_inserts_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cdc_max_batch_interval`<sup>Required</sup> <a name="cdc_max_batch_interval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```python
cdc_max_batch_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_min_file_size`<sup>Required</sup> <a name="cdc_min_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```python
cdc_min_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cdc_path`<sup>Required</sup> <a name="cdc_path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```python
cdc_path: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `csv_delimiter`<sup>Required</sup> <a name="csv_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```python
csv_delimiter: str
```

- *Type:* str

---

##### `csv_no_sup_value`<sup>Required</sup> <a name="csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```python
csv_no_sup_value: str
```

- *Type:* str

---

##### `csv_null_value`<sup>Required</sup> <a name="csv_null_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```python
csv_null_value: str
```

- *Type:* str

---

##### `csv_row_delimiter`<sup>Required</sup> <a name="csv_row_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```python
csv_row_delimiter: str
```

- *Type:* str

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `data_page_size`<sup>Required</sup> <a name="data_page_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```python
data_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_partition_delimiter`<sup>Required</sup> <a name="date_partition_delimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```python
date_partition_delimiter: str
```

- *Type:* str

---

##### `date_partition_enabled`<sup>Required</sup> <a name="date_partition_enabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```python
date_partition_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date_partition_sequence`<sup>Required</sup> <a name="date_partition_sequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```python
date_partition_sequence: str
```

- *Type:* str

---

##### `dict_page_size_limit`<sup>Required</sup> <a name="dict_page_size_limit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```python
dict_page_size_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_statistics`<sup>Required</sup> <a name="enable_statistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```python
enable_statistics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_type`<sup>Required</sup> <a name="encoding_type" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```python
encoding_type: str
```

- *Type:* str

---

##### `encryption_mode`<sup>Required</sup> <a name="encryption_mode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```python
encryption_mode: str
```

- *Type:* str

---

##### `external_table_definition`<sup>Required</sup> <a name="external_table_definition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```python
external_table_definition: str
```

- *Type:* str

---

##### `ignore_header_rows`<sup>Required</sup> <a name="ignore_header_rows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```python
ignore_header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ignore_headers_row`<sup>Required</sup> <a name="ignore_headers_row" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow"></a>

```python
ignore_headers_row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_op_for_full_load`<sup>Required</sup> <a name="include_op_for_full_load" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```python
include_op_for_full_load: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parquet_timestamp_in_millisecond`<sup>Required</sup> <a name="parquet_timestamp_in_millisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```python
parquet_timestamp_in_millisecond: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parquet_version`<sup>Required</sup> <a name="parquet_version" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```python
parquet_version: str
```

- *Type:* str

---

##### `preserve_transactions`<sup>Required</sup> <a name="preserve_transactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```python
preserve_transactions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```python
rfc4180: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `row_group_length`<sup>Required</sup> <a name="row_group_length" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```python
row_group_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_side_encryption_kms_key_id`<sup>Required</sup> <a name="server_side_encryption_kms_key_id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```python
server_side_encryption_kms_key_id: str
```

- *Type:* str

---

##### `service_access_role_arn`<sup>Required</sup> <a name="service_access_role_arn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```python
service_access_role_arn: str
```

- *Type:* str

---

##### `timestamp_column_name`<sup>Required</sup> <a name="timestamp_column_name" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```python
timestamp_column_name: str
```

- *Type:* str

---

##### `use_csv_no_sup_value`<sup>Required</sup> <a name="use_csv_no_sup_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```python
use_csv_no_sup_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_task_start_time_for_full_load_timestamp`<sup>Required</sup> <a name="use_task_start_time_for_full_load_timestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```python
use_task_start_time_for_full_load_timestamp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```python
internal_value: DmsEndpointS3Settings
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---


### DmsEndpointTimeoutsOutputReference <a name="DmsEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_endpoint

dmsEndpoint.DmsEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DmsEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>, cdktf.IResolvable]

---



