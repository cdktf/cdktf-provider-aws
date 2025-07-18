# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktf/provider-aws.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .endpointType(java.lang.String)
    .engineName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .elasticsearchSettings(DmsEndpointElasticsearchSettings)
//  .extraConnectionAttributes(java.lang.String)
//  .id(java.lang.String)
//  .kafkaSettings(DmsEndpointKafkaSettings)
//  .kinesisSettings(DmsEndpointKinesisSettings)
//  .kmsKeyArn(java.lang.String)
//  .mongodbSettings(DmsEndpointMongodbSettings)
//  .password(java.lang.String)
//  .pauseReplicationTasks(java.lang.Boolean)
//  .pauseReplicationTasks(IResolvable)
//  .port(java.lang.Number)
//  .postgresSettings(DmsEndpointPostgresSettings)
//  .redisSettings(DmsEndpointRedisSettings)
//  .redshiftSettings(DmsEndpointRedshiftSettings)
//  .region(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerArn(java.lang.String)
//  .serverName(java.lang.String)
//  .serviceAccessRole(java.lang.String)
//  .sslMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsEndpointTimeouts)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName">engineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.pauseReplicationTasks">pauseReplicationTasks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.postgresSettings">postgresSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | postgres_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings">redisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serviceAccessRole">serviceAccessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#username DmsEndpoint#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.engineName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.elasticsearchSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.extraConnectionAttributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kafkaSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kinesisSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodbSettings`<sup>Optional</sup> <a name="mongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.mongodbSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#password DmsEndpoint#password}.

---

##### `pauseReplicationTasks`<sup>Optional</sup> <a name="pauseReplicationTasks" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.pauseReplicationTasks"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `postgresSettings`<sup>Optional</sup> <a name="postgresSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.postgresSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

postgres_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#postgres_settings DmsEndpoint#postgres_settings}

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redisSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.redshiftSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#region DmsEndpoint#region}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerAccessRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.secretsManagerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `serviceAccessRole`<sup>Optional</sup> <a name="serviceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.serviceAccessRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.sslMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#username DmsEndpoint#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">putElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings">putKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings">putMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings">putPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings">putRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings">putRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">resetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">resetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings">resetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings">resetMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPauseReplicationTasks">resetPauseReplicationTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPostgresSettings">resetPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings">resetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">resetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole">resetServiceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticsearchSettings` <a name="putElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```java
public void putElasticsearchSettings(DmsEndpointElasticsearchSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```java
public void putKafkaSettings(DmsEndpointKafkaSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `putKinesisSettings` <a name="putKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```java
public void putKinesisSettings(DmsEndpointKinesisSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `putMongodbSettings` <a name="putMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings"></a>

```java
public void putMongodbSettings(DmsEndpointMongodbSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `putPostgresSettings` <a name="putPostgresSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings"></a>

```java
public void putPostgresSettings(DmsEndpointPostgresSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---

##### `putRedisSettings` <a name="putRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```java
public void putRedisSettings(DmsEndpointRedisSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `putRedshiftSettings` <a name="putRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```java
public void putRedshiftSettings(DmsEndpointRedshiftSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts"></a>

```java
public void putTimeouts(DmsEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetElasticsearchSettings` <a name="resetElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```java
public void resetElasticsearchSettings()
```

##### `resetExtraConnectionAttributes` <a name="resetExtraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```java
public void resetExtraConnectionAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```java
public void resetKafkaSettings()
```

##### `resetKinesisSettings` <a name="resetKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```java
public void resetKinesisSettings()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetMongodbSettings` <a name="resetMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings"></a>

```java
public void resetMongodbSettings()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPauseReplicationTasks` <a name="resetPauseReplicationTasks" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPauseReplicationTasks"></a>

```java
public void resetPauseReplicationTasks()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort"></a>

```java
public void resetPort()
```

##### `resetPostgresSettings` <a name="resetPostgresSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPostgresSettings"></a>

```java
public void resetPostgresSettings()
```

##### `resetRedisSettings` <a name="resetRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```java
public void resetRedisSettings()
```

##### `resetRedshiftSettings` <a name="resetRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```java
public void resetRedshiftSettings()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn"></a>

```java
public void resetSecretsManagerAccessRoleArn()
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn"></a>

```java
public void resetSecretsManagerArn()
```

##### `resetServerName` <a name="resetServerName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetServiceAccessRole` <a name="resetServiceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole"></a>

```java
public void resetServiceAccessRole()
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```java
public void resetSslMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpoint;

DmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DmsEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn">endpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettings">postgresSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference">DmsEndpointPostgresSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">elasticsearchSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput">engineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">extraConnectionAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">kinesisSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput">mongodbSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasksInput">pauseReplicationTasksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettingsInput">postgresSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">redisSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">redshiftSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput">serviceAccessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName">engineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasks">pauseReplicationTasks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole">serviceAccessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="elasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```java
public DmsEndpointElasticsearchSettingsOutputReference getElasticsearchSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```java
public java.lang.String getEndpointArn();
```

- *Type:* java.lang.String

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```java
public DmsEndpointKafkaSettingsOutputReference getKafkaSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesisSettings`<sup>Required</sup> <a name="kinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```java
public DmsEndpointKinesisSettingsOutputReference getKinesisSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `mongodbSettings`<sup>Required</sup> <a name="mongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings"></a>

```java
public DmsEndpointMongodbSettingsOutputReference getMongodbSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a>

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettings"></a>

```java
public DmsEndpointPostgresSettingsOutputReference getPostgresSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference">DmsEndpointPostgresSettingsOutputReference</a>

---

##### `redisSettings`<sup>Required</sup> <a name="redisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```java
public DmsEndpointRedisSettingsOutputReference getRedisSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```java
public DmsEndpointRedshiftSettingsOutputReference getRedshiftSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts"></a>

```java
public DmsEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `elasticsearchSettingsInput`<sup>Optional</sup> <a name="elasticsearchSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```java
public DmsEndpointElasticsearchSettings getElasticsearchSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput"></a>

```java
public java.lang.String getEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```java
public java.lang.String getEngineNameInput();
```

- *Type:* java.lang.String

---

##### `extraConnectionAttributesInput`<sup>Optional</sup> <a name="extraConnectionAttributesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```java
public java.lang.String getExtraConnectionAttributesInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```java
public DmsEndpointKafkaSettings getKafkaSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `kinesisSettingsInput`<sup>Optional</sup> <a name="kinesisSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```java
public DmsEndpointKinesisSettings getKinesisSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `mongodbSettingsInput`<sup>Optional</sup> <a name="mongodbSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput"></a>

```java
public DmsEndpointMongodbSettings getMongodbSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `pauseReplicationTasksInput`<sup>Optional</sup> <a name="pauseReplicationTasksInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasksInput"></a>

```java
public java.lang.Object getPauseReplicationTasksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `postgresSettingsInput`<sup>Optional</sup> <a name="postgresSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettingsInput"></a>

```java
public DmsEndpointPostgresSettings getPostgresSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---

##### `redisSettingsInput`<sup>Optional</sup> <a name="redisSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```java
public DmsEndpointRedisSettings getRedisSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `redshiftSettingsInput`<sup>Optional</sup> <a name="redshiftSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```java
public DmsEndpointRedshiftSettings getRedshiftSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput"></a>

```java
public java.lang.String getSecretsManagerArnInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleInput`<sup>Optional</sup> <a name="serviceAccessRoleInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput"></a>

```java
public java.lang.String getServiceAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="extraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```java
public java.lang.String getExtraConnectionAttributes();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `pauseReplicationTasks`<sup>Required</sup> <a name="pauseReplicationTasks" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasks"></a>

```java
public java.lang.Object getPauseReplicationTasks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `serviceAccessRole`<sup>Required</sup> <a name="serviceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole"></a>

```java
public java.lang.String getServiceAccessRole();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointConfig;

DmsEndpointConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .endpointType(java.lang.String)
    .engineName(java.lang.String)
//  .certificateArn(java.lang.String)
//  .databaseName(java.lang.String)
//  .elasticsearchSettings(DmsEndpointElasticsearchSettings)
//  .extraConnectionAttributes(java.lang.String)
//  .id(java.lang.String)
//  .kafkaSettings(DmsEndpointKafkaSettings)
//  .kinesisSettings(DmsEndpointKinesisSettings)
//  .kmsKeyArn(java.lang.String)
//  .mongodbSettings(DmsEndpointMongodbSettings)
//  .password(java.lang.String)
//  .pauseReplicationTasks(java.lang.Boolean)
//  .pauseReplicationTasks(IResolvable)
//  .port(java.lang.Number)
//  .postgresSettings(DmsEndpointPostgresSettings)
//  .redisSettings(DmsEndpointRedisSettings)
//  .redshiftSettings(DmsEndpointRedshiftSettings)
//  .region(java.lang.String)
//  .secretsManagerAccessRoleArn(java.lang.String)
//  .secretsManagerArn(java.lang.String)
//  .serverName(java.lang.String)
//  .serviceAccessRole(java.lang.String)
//  .sslMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DmsEndpointTimeouts)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName">engineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.pauseReplicationTasks">pauseReplicationTasks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.postgresSettings">postgresSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | postgres_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole">serviceAccessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#username DmsEndpoint#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```java
public DmsEndpointElasticsearchSettings getElasticsearchSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```java
public java.lang.String getExtraConnectionAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```java
public DmsEndpointKafkaSettings getKafkaSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```java
public DmsEndpointKinesisSettings getKinesisSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodbSettings`<sup>Optional</sup> <a name="mongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings"></a>

```java
public DmsEndpointMongodbSettings getMongodbSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#password DmsEndpoint#password}.

---

##### `pauseReplicationTasks`<sup>Optional</sup> <a name="pauseReplicationTasks" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.pauseReplicationTasks"></a>

```java
public java.lang.Object getPauseReplicationTasks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `postgresSettings`<sup>Optional</sup> <a name="postgresSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.postgresSettings"></a>

```java
public DmsEndpointPostgresSettings getPostgresSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

postgres_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#postgres_settings DmsEndpoint#postgres_settings}

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```java
public DmsEndpointRedisSettings getRedisSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```java
public DmsEndpointRedshiftSettings getRedshiftSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#region DmsEndpoint#region}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn"></a>

```java
public java.lang.String getSecretsManagerAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `serviceAccessRole`<sup>Optional</sup> <a name="serviceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole"></a>

```java
public java.lang.String getServiceAccessRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts"></a>

```java
public DmsEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#username DmsEndpoint#username}.

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointElasticsearchSettings;

DmsEndpointElasticsearchSettings.builder()
    .endpointUri(java.lang.String)
    .serviceAccessRoleArn(java.lang.String)
//  .errorRetryDuration(java.lang.Number)
//  .fullLoadErrorPercentage(java.lang.Number)
//  .useNewMappingType(java.lang.Boolean)
//  .useNewMappingType(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.useNewMappingType">useNewMappingType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}. |

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

##### `fullLoadErrorPercentage`<sup>Optional</sup> <a name="fullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```java
public java.lang.Number getFullLoadErrorPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

##### `useNewMappingType`<sup>Optional</sup> <a name="useNewMappingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.useNewMappingType"></a>

```java
public java.lang.Object getUseNewMappingType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}.

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointKafkaSettings;

DmsEndpointKafkaSettings.builder()
    .broker(java.lang.String)
//  .includeControlDetails(java.lang.Boolean)
//  .includeControlDetails(IResolvable)
//  .includeNullAndEmpty(java.lang.Boolean)
//  .includeNullAndEmpty(IResolvable)
//  .includePartitionValue(java.lang.Boolean)
//  .includePartitionValue(IResolvable)
//  .includeTableAlterOperations(java.lang.Boolean)
//  .includeTableAlterOperations(IResolvable)
//  .includeTransactionDetails(java.lang.Boolean)
//  .includeTransactionDetails(IResolvable)
//  .messageFormat(java.lang.String)
//  .messageMaxBytes(java.lang.Number)
//  .noHexPrefix(java.lang.Boolean)
//  .noHexPrefix(IResolvable)
//  .partitionIncludeSchemaTable(java.lang.Boolean)
//  .partitionIncludeSchemaTable(IResolvable)
//  .saslMechanism(java.lang.String)
//  .saslPassword(java.lang.String)
//  .saslUsername(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .sslCaCertificateArn(java.lang.String)
//  .sslClientCertificateArn(java.lang.String)
//  .sslClientKeyArn(java.lang.String)
//  .sslClientKeyPassword(java.lang.String)
//  .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">broker</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslMechanism">saslMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">saslPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername">saslUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">topic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}. |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```java
public java.lang.String getBroker();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}.

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```java
public java.lang.Object getIncludeControlDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```java
public java.lang.Object getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```java
public java.lang.Object getIncludePartitionValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```java
public java.lang.Object getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```java
public java.lang.Object getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```java
public java.lang.Object getNoHexPrefix();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Object getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `saslMechanism`<sup>Optional</sup> <a name="saslMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslMechanism"></a>

```java
public java.lang.String getSaslMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}.

---

##### `saslPassword`<sup>Optional</sup> <a name="saslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```java
public java.lang.String getSaslPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

##### `saslUsername`<sup>Optional</sup> <a name="saslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername"></a>

```java
public java.lang.String getSaslUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `sslClientCertificateArn`<sup>Optional</sup> <a name="sslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```java
public java.lang.String getSslClientCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

##### `sslClientKeyArn`<sup>Optional</sup> <a name="sslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```java
public java.lang.String getSslClientKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

##### `sslClientKeyPassword`<sup>Optional</sup> <a name="sslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```java
public java.lang.String getSslClientKeyPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}.

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointKinesisSettings;

DmsEndpointKinesisSettings.builder()
//  .includeControlDetails(java.lang.Boolean)
//  .includeControlDetails(IResolvable)
//  .includeNullAndEmpty(java.lang.Boolean)
//  .includeNullAndEmpty(IResolvable)
//  .includePartitionValue(java.lang.Boolean)
//  .includePartitionValue(IResolvable)
//  .includeTableAlterOperations(java.lang.Boolean)
//  .includeTableAlterOperations(IResolvable)
//  .includeTransactionDetails(java.lang.Boolean)
//  .includeTransactionDetails(IResolvable)
//  .messageFormat(java.lang.String)
//  .partitionIncludeSchemaTable(java.lang.Boolean)
//  .partitionIncludeSchemaTable(IResolvable)
//  .serviceAccessRoleArn(java.lang.String)
//  .streamArn(java.lang.String)
//  .useLargeIntegerValue(java.lang.Boolean)
//  .useLargeIntegerValue(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.useLargeIntegerValue">useLargeIntegerValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#use_large_integer_value DmsEndpoint#use_large_integer_value}. |

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```java
public java.lang.Object getIncludeControlDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```java
public java.lang.Object getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```java
public java.lang.Object getIncludePartitionValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```java
public java.lang.Object getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```java
public java.lang.Object getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Object getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

##### `useLargeIntegerValue`<sup>Optional</sup> <a name="useLargeIntegerValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.useLargeIntegerValue"></a>

```java
public java.lang.Object getUseLargeIntegerValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#use_large_integer_value DmsEndpoint#use_large_integer_value}.

---

### DmsEndpointMongodbSettings <a name="DmsEndpointMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointMongodbSettings;

DmsEndpointMongodbSettings.builder()
//  .authMechanism(java.lang.String)
//  .authSource(java.lang.String)
//  .authType(java.lang.String)
//  .docsToInvestigate(java.lang.String)
//  .extractDocId(java.lang.String)
//  .nestingLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource">authSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId">extractDocId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate"></a>

```java
public java.lang.String getDocsToInvestigate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId"></a>

```java
public java.lang.String getExtractDocId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

### DmsEndpointPostgresSettings <a name="DmsEndpointPostgresSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointPostgresSettings;

DmsEndpointPostgresSettings.builder()
//  .afterConnectScript(java.lang.String)
//  .babelfishDatabaseName(java.lang.String)
//  .captureDdls(java.lang.Boolean)
//  .captureDdls(IResolvable)
//  .databaseMode(java.lang.String)
//  .ddlArtifactsSchema(java.lang.String)
//  .executeTimeout(java.lang.Number)
//  .failTasksOnLobTruncation(java.lang.Boolean)
//  .failTasksOnLobTruncation(IResolvable)
//  .heartbeatEnable(java.lang.Boolean)
//  .heartbeatEnable(IResolvable)
//  .heartbeatFrequency(java.lang.Number)
//  .heartbeatSchema(java.lang.String)
//  .mapBooleanAsBoolean(java.lang.Boolean)
//  .mapBooleanAsBoolean(IResolvable)
//  .mapJsonbAsClob(java.lang.Boolean)
//  .mapJsonbAsClob(IResolvable)
//  .mapLongVarcharAs(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .pluginName(java.lang.String)
//  .slotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.captureDdls">captureDdls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.databaseMode">databaseMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatEnable">heartbeatEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatSchema">heartbeatSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapJsonbAsClob">mapJsonbAsClob</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapLongVarcharAs">mapLongVarcharAs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.slotName">slotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}.

---

##### `babelfishDatabaseName`<sup>Optional</sup> <a name="babelfishDatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.babelfishDatabaseName"></a>

```java
public java.lang.String getBabelfishDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}.

---

##### `captureDdls`<sup>Optional</sup> <a name="captureDdls" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.captureDdls"></a>

```java
public java.lang.Object getCaptureDdls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}.

---

##### `databaseMode`<sup>Optional</sup> <a name="databaseMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.databaseMode"></a>

```java
public java.lang.String getDatabaseMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}.

---

##### `ddlArtifactsSchema`<sup>Optional</sup> <a name="ddlArtifactsSchema" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.ddlArtifactsSchema"></a>

```java
public java.lang.String getDdlArtifactsSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}.

---

##### `executeTimeout`<sup>Optional</sup> <a name="executeTimeout" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}.

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="failTasksOnLobTruncation" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Object getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}.

---

##### `heartbeatEnable`<sup>Optional</sup> <a name="heartbeatEnable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatEnable"></a>

```java
public java.lang.Object getHeartbeatEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}.

---

##### `heartbeatFrequency`<sup>Optional</sup> <a name="heartbeatFrequency" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatFrequency"></a>

```java
public java.lang.Number getHeartbeatFrequency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}.

---

##### `heartbeatSchema`<sup>Optional</sup> <a name="heartbeatSchema" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatSchema"></a>

```java
public java.lang.String getHeartbeatSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}.

---

##### `mapBooleanAsBoolean`<sup>Optional</sup> <a name="mapBooleanAsBoolean" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Object getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}.

---

##### `mapJsonbAsClob`<sup>Optional</sup> <a name="mapJsonbAsClob" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapJsonbAsClob"></a>

```java
public java.lang.Object getMapJsonbAsClob();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}.

---

##### `mapLongVarcharAs`<sup>Optional</sup> <a name="mapLongVarcharAs" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapLongVarcharAs"></a>

```java
public java.lang.String getMapLongVarcharAs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}.

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}.

---

##### `slotName`<sup>Optional</sup> <a name="slotName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}.

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointRedisSettings;

DmsEndpointRedisSettings.builder()
    .authType(java.lang.String)
    .port(java.lang.Number)
    .serverName(java.lang.String)
//  .authPassword(java.lang.String)
//  .authUserName(java.lang.String)
//  .sslCaCertificateArn(java.lang.String)
//  .sslSecurityProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `authPassword`<sup>Optional</sup> <a name="authPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}.

---

##### `authUserName`<sup>Optional</sup> <a name="authUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}.

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `sslSecurityProtocol`<sup>Optional</sup> <a name="sslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```java
public java.lang.String getSslSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}.

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointRedshiftSettings;

DmsEndpointRedshiftSettings.builder()
//  .bucketFolder(java.lang.String)
//  .bucketName(java.lang.String)
//  .encryptionMode(java.lang.String)
//  .serverSideEncryptionKmsKeyId(java.lang.String)
//  .serviceAccessRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

### DmsEndpointTimeouts <a name="DmsEndpointTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointTimeouts;

DmsEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#create DmsEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#create DmsEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointElasticsearchSettingsOutputReference;

new DmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">resetFullLoadErrorPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetUseNewMappingType">resetUseNewMappingType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```java
public void resetErrorRetryDuration()
```

##### `resetFullLoadErrorPercentage` <a name="resetFullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```java
public void resetFullLoadErrorPercentage()
```

##### `resetUseNewMappingType` <a name="resetUseNewMappingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetUseNewMappingType"></a>

```java
public void resetUseNewMappingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">endpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">fullLoadErrorPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingTypeInput">useNewMappingTypeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingType">useNewMappingType</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```java
public java.lang.String getEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```java
public java.lang.Number getErrorRetryDurationInput();
```

- *Type:* java.lang.Number

---

##### `fullLoadErrorPercentageInput`<sup>Optional</sup> <a name="fullLoadErrorPercentageInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```java
public java.lang.Number getFullLoadErrorPercentageInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `useNewMappingTypeInput`<sup>Optional</sup> <a name="useNewMappingTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingTypeInput"></a>

```java
public java.lang.Object getUseNewMappingTypeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```java
public java.lang.Number getErrorRetryDuration();
```

- *Type:* java.lang.Number

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="fullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```java
public java.lang.Number getFullLoadErrorPercentage();
```

- *Type:* java.lang.Number

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `useNewMappingType`<sup>Required</sup> <a name="useNewMappingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingType"></a>

```java
public java.lang.Object getUseNewMappingType();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointElasticsearchSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointKafkaSettingsOutputReference;

new DmsEndpointKafkaSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslMechanism">resetSaslMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">resetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername">resetSaslUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">resetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">resetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">resetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```java
public void resetIncludeControlDetails()
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```java
public void resetIncludeNullAndEmpty()
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```java
public void resetIncludePartitionValue()
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```java
public void resetIncludeTableAlterOperations()
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```java
public void resetIncludeTransactionDetails()
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```java
public void resetMessageFormat()
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```java
public void resetMessageMaxBytes()
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```java
public void resetNoHexPrefix()
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```java
public void resetPartitionIncludeSchemaTable()
```

##### `resetSaslMechanism` <a name="resetSaslMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslMechanism"></a>

```java
public void resetSaslMechanism()
```

##### `resetSaslPassword` <a name="resetSaslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```java
public void resetSaslPassword()
```

##### `resetSaslUsername` <a name="resetSaslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername"></a>

```java
public void resetSaslUsername()
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```java
public void resetSecurityProtocol()
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```java
public void resetSslCaCertificateArn()
```

##### `resetSslClientCertificateArn` <a name="resetSslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```java
public void resetSslClientCertificateArn()
```

##### `resetSslClientKeyArn` <a name="resetSslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```java
public void resetSslClientKeyArn()
```

##### `resetSslClientKeyPassword` <a name="resetSslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```java
public void resetSslClientKeyPassword()
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```java
public void resetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">brokerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanismInput">saslMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">saslPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput">saslUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">sslClientCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">sslClientKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">sslClientKeyPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">messageMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanism">saslMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">saslPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername">saslUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `brokerInput`<sup>Optional</sup> <a name="brokerInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```java
public java.lang.String getBrokerInput();
```

- *Type:* java.lang.String

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```java
public java.lang.Object getIncludeControlDetailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```java
public java.lang.Object getIncludeNullAndEmptyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```java
public java.lang.Object getIncludePartitionValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```java
public java.lang.Object getIncludeTableAlterOperationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```java
public java.lang.Object getIncludeTransactionDetailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```java
public java.lang.Number getMessageMaxBytesInput();
```

- *Type:* java.lang.Number

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```java
public java.lang.Object getNoHexPrefixInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```java
public java.lang.Object getPartitionIncludeSchemaTableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saslMechanismInput`<sup>Optional</sup> <a name="saslMechanismInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanismInput"></a>

```java
public java.lang.String getSaslMechanismInput();
```

- *Type:* java.lang.String

---

##### `saslPasswordInput`<sup>Optional</sup> <a name="saslPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```java
public java.lang.String getSaslPasswordInput();
```

- *Type:* java.lang.String

---

##### `saslUsernameInput`<sup>Optional</sup> <a name="saslUsernameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput"></a>

```java
public java.lang.String getSaslUsernameInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```java
public java.lang.String getSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```java
public java.lang.String getSslCaCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientCertificateArnInput`<sup>Optional</sup> <a name="sslClientCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```java
public java.lang.String getSslClientCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeyArnInput`<sup>Optional</sup> <a name="sslClientKeyArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```java
public java.lang.String getSslClientKeyArnInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeyPasswordInput`<sup>Optional</sup> <a name="sslClientKeyPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```java
public java.lang.String getSslClientKeyPasswordInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```java
public java.lang.String getBroker();
```

- *Type:* java.lang.String

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```java
public java.lang.Object getIncludeControlDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public java.lang.Object getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```java
public java.lang.Object getIncludePartitionValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public java.lang.Object getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public java.lang.Object getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```java
public java.lang.Number getMessageMaxBytes();
```

- *Type:* java.lang.Number

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```java
public java.lang.Object getNoHexPrefix();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Object getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saslMechanism`<sup>Required</sup> <a name="saslMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanism"></a>

```java
public java.lang.String getSaslMechanism();
```

- *Type:* java.lang.String

---

##### `saslPassword`<sup>Required</sup> <a name="saslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```java
public java.lang.String getSaslPassword();
```

- *Type:* java.lang.String

---

##### `saslUsername`<sup>Required</sup> <a name="saslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```java
public java.lang.String getSaslUsername();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientCertificateArn`<sup>Required</sup> <a name="sslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```java
public java.lang.String getSslClientCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyArn`<sup>Required</sup> <a name="sslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```java
public java.lang.String getSslClientKeyArn();
```

- *Type:* java.lang.String

---

##### `sslClientKeyPassword`<sup>Required</sup> <a name="sslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```java
public java.lang.String getSslClientKeyPassword();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointKafkaSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointKinesisSettingsOutputReference;

new DmsEndpointKinesisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetUseLargeIntegerValue">resetUseLargeIntegerValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```java
public void resetIncludeControlDetails()
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```java
public void resetIncludeNullAndEmpty()
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```java
public void resetIncludePartitionValue()
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```java
public void resetIncludeTableAlterOperations()
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```java
public void resetIncludeTransactionDetails()
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```java
public void resetMessageFormat()
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```java
public void resetPartitionIncludeSchemaTable()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```java
public void resetStreamArn()
```

##### `resetUseLargeIntegerValue` <a name="resetUseLargeIntegerValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetUseLargeIntegerValue"></a>

```java
public void resetUseLargeIntegerValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValueInput">useLargeIntegerValueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValue">useLargeIntegerValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```java
public java.lang.Object getIncludeControlDetailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```java
public java.lang.Object getIncludeNullAndEmptyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```java
public java.lang.Object getIncludePartitionValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```java
public java.lang.Object getIncludeTableAlterOperationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```java
public java.lang.Object getIncludeTransactionDetailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```java
public java.lang.Object getPartitionIncludeSchemaTableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```java
public java.lang.String getStreamArnInput();
```

- *Type:* java.lang.String

---

##### `useLargeIntegerValueInput`<sup>Optional</sup> <a name="useLargeIntegerValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValueInput"></a>

```java
public java.lang.Object getUseLargeIntegerValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```java
public java.lang.Object getIncludeControlDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```java
public java.lang.Object getIncludeNullAndEmpty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```java
public java.lang.Object getIncludePartitionValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```java
public java.lang.Object getIncludeTableAlterOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```java
public java.lang.Object getIncludeTransactionDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```java
public java.lang.Object getPartitionIncludeSchemaTable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `useLargeIntegerValue`<sup>Required</sup> <a name="useLargeIntegerValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValue"></a>

```java
public java.lang.Object getUseLargeIntegerValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointKinesisSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMongodbSettingsOutputReference <a name="DmsEndpointMongodbSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointMongodbSettingsOutputReference;

new DmsEndpointMongodbSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism"></a>

```java
public void resetAuthMechanism()
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource"></a>

```java
public void resetAuthSource()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate"></a>

```java
public void resetDocsToInvestigate()
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId"></a>

```java
public void resetExtractDocId()
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel"></a>

```java
public void resetNestingLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource">authSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput"></a>

```java
public java.lang.String getAuthMechanismInput();
```

- *Type:* java.lang.String

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput"></a>

```java
public java.lang.String getAuthSourceInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput"></a>

```java
public java.lang.String getDocsToInvestigateInput();
```

- *Type:* java.lang.String

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput"></a>

```java
public java.lang.String getExtractDocIdInput();
```

- *Type:* java.lang.String

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput"></a>

```java
public java.lang.String getNestingLevelInput();
```

- *Type:* java.lang.String

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```java
public java.lang.String getAuthMechanism();
```

- *Type:* java.lang.String

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```java
public java.lang.String getAuthSource();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```java
public java.lang.String getDocsToInvestigate();
```

- *Type:* java.lang.String

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```java
public java.lang.String getExtractDocId();
```

- *Type:* java.lang.String

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```java
public java.lang.String getNestingLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointMongodbSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---


### DmsEndpointPostgresSettingsOutputReference <a name="DmsEndpointPostgresSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointPostgresSettingsOutputReference;

new DmsEndpointPostgresSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetBabelfishDatabaseName">resetBabelfishDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetCaptureDdls">resetCaptureDdls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDatabaseMode">resetDatabaseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDdlArtifactsSchema">resetDdlArtifactsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetExecuteTimeout">resetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetFailTasksOnLobTruncation">resetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatEnable">resetHeartbeatEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatFrequency">resetHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatSchema">resetHeartbeatSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapBooleanAsBoolean">resetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapJsonbAsClob">resetMapJsonbAsClob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapLongVarcharAs">resetMapLongVarcharAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetSlotName">resetSlotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAfterConnectScript"></a>

```java
public void resetAfterConnectScript()
```

##### `resetBabelfishDatabaseName` <a name="resetBabelfishDatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetBabelfishDatabaseName"></a>

```java
public void resetBabelfishDatabaseName()
```

##### `resetCaptureDdls` <a name="resetCaptureDdls" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetCaptureDdls"></a>

```java
public void resetCaptureDdls()
```

##### `resetDatabaseMode` <a name="resetDatabaseMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDatabaseMode"></a>

```java
public void resetDatabaseMode()
```

##### `resetDdlArtifactsSchema` <a name="resetDdlArtifactsSchema" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDdlArtifactsSchema"></a>

```java
public void resetDdlArtifactsSchema()
```

##### `resetExecuteTimeout` <a name="resetExecuteTimeout" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetExecuteTimeout"></a>

```java
public void resetExecuteTimeout()
```

##### `resetFailTasksOnLobTruncation` <a name="resetFailTasksOnLobTruncation" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```java
public void resetFailTasksOnLobTruncation()
```

##### `resetHeartbeatEnable` <a name="resetHeartbeatEnable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatEnable"></a>

```java
public void resetHeartbeatEnable()
```

##### `resetHeartbeatFrequency` <a name="resetHeartbeatFrequency" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatFrequency"></a>

```java
public void resetHeartbeatFrequency()
```

##### `resetHeartbeatSchema` <a name="resetHeartbeatSchema" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatSchema"></a>

```java
public void resetHeartbeatSchema()
```

##### `resetMapBooleanAsBoolean` <a name="resetMapBooleanAsBoolean" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```java
public void resetMapBooleanAsBoolean()
```

##### `resetMapJsonbAsClob` <a name="resetMapJsonbAsClob" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapJsonbAsClob"></a>

```java
public void resetMapJsonbAsClob()
```

##### `resetMapLongVarcharAs` <a name="resetMapLongVarcharAs" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapLongVarcharAs"></a>

```java
public void resetMapLongVarcharAs()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetPluginName"></a>

```java
public void resetPluginName()
```

##### `resetSlotName` <a name="resetSlotName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetSlotName"></a>

```java
public void resetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseNameInput">babelfishDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdlsInput">captureDdlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseModeInput">databaseModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchemaInput">ddlArtifactsSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeoutInput">executeTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncationInput">failTasksOnLobTruncationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnableInput">heartbeatEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequencyInput">heartbeatFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchemaInput">heartbeatSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBooleanInput">mapBooleanAsBooleanInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClobInput">mapJsonbAsClobInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAsInput">mapLongVarcharAsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotNameInput">slotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdls">captureDdls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseMode">databaseMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeout">executeTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable">heartbeatEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema">heartbeatSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob">mapJsonbAsClob</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs">mapLongVarcharAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginName">pluginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotName">slotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScriptInput"></a>

```java
public java.lang.String getAfterConnectScriptInput();
```

- *Type:* java.lang.String

---

##### `babelfishDatabaseNameInput`<sup>Optional</sup> <a name="babelfishDatabaseNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseNameInput"></a>

```java
public java.lang.String getBabelfishDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `captureDdlsInput`<sup>Optional</sup> <a name="captureDdlsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdlsInput"></a>

```java
public java.lang.Object getCaptureDdlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseModeInput`<sup>Optional</sup> <a name="databaseModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseModeInput"></a>

```java
public java.lang.String getDatabaseModeInput();
```

- *Type:* java.lang.String

---

##### `ddlArtifactsSchemaInput`<sup>Optional</sup> <a name="ddlArtifactsSchemaInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchemaInput"></a>

```java
public java.lang.String getDdlArtifactsSchemaInput();
```

- *Type:* java.lang.String

---

##### `executeTimeoutInput`<sup>Optional</sup> <a name="executeTimeoutInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeoutInput"></a>

```java
public java.lang.Number getExecuteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `failTasksOnLobTruncationInput`<sup>Optional</sup> <a name="failTasksOnLobTruncationInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```java
public java.lang.Object getFailTasksOnLobTruncationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `heartbeatEnableInput`<sup>Optional</sup> <a name="heartbeatEnableInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnableInput"></a>

```java
public java.lang.Object getHeartbeatEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `heartbeatFrequencyInput`<sup>Optional</sup> <a name="heartbeatFrequencyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequencyInput"></a>

```java
public java.lang.Number getHeartbeatFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `heartbeatSchemaInput`<sup>Optional</sup> <a name="heartbeatSchemaInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchemaInput"></a>

```java
public java.lang.String getHeartbeatSchemaInput();
```

- *Type:* java.lang.String

---

##### `mapBooleanAsBooleanInput`<sup>Optional</sup> <a name="mapBooleanAsBooleanInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```java
public java.lang.Object getMapBooleanAsBooleanInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapJsonbAsClobInput`<sup>Optional</sup> <a name="mapJsonbAsClobInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClobInput"></a>

```java
public java.lang.Object getMapJsonbAsClobInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapLongVarcharAsInput`<sup>Optional</sup> <a name="mapLongVarcharAsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAsInput"></a>

```java
public java.lang.String getMapLongVarcharAsInput();
```

- *Type:* java.lang.String

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginNameInput"></a>

```java
public java.lang.String getPluginNameInput();
```

- *Type:* java.lang.String

---

##### `slotNameInput`<sup>Optional</sup> <a name="slotNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotNameInput"></a>

```java
public java.lang.String getSlotNameInput();
```

- *Type:* java.lang.String

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScript"></a>

```java
public java.lang.String getAfterConnectScript();
```

- *Type:* java.lang.String

---

##### `babelfishDatabaseName`<sup>Required</sup> <a name="babelfishDatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName"></a>

```java
public java.lang.String getBabelfishDatabaseName();
```

- *Type:* java.lang.String

---

##### `captureDdls`<sup>Required</sup> <a name="captureDdls" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdls"></a>

```java
public java.lang.Object getCaptureDdls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseMode`<sup>Required</sup> <a name="databaseMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseMode"></a>

```java
public java.lang.String getDatabaseMode();
```

- *Type:* java.lang.String

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="ddlArtifactsSchema" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema"></a>

```java
public java.lang.String getDdlArtifactsSchema();
```

- *Type:* java.lang.String

---

##### `executeTimeout`<sup>Required</sup> <a name="executeTimeout" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeout"></a>

```java
public java.lang.Number getExecuteTimeout();
```

- *Type:* java.lang.Number

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```java
public java.lang.Object getFailTasksOnLobTruncation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `heartbeatEnable`<sup>Required</sup> <a name="heartbeatEnable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable"></a>

```java
public java.lang.Object getHeartbeatEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `heartbeatFrequency`<sup>Required</sup> <a name="heartbeatFrequency" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency"></a>

```java
public java.lang.Number getHeartbeatFrequency();
```

- *Type:* java.lang.Number

---

##### `heartbeatSchema`<sup>Required</sup> <a name="heartbeatSchema" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema"></a>

```java
public java.lang.String getHeartbeatSchema();
```

- *Type:* java.lang.String

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```java
public java.lang.Object getMapBooleanAsBoolean();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapJsonbAsClob`<sup>Required</sup> <a name="mapJsonbAsClob" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob"></a>

```java
public java.lang.Object getMapJsonbAsClob();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mapLongVarcharAs`<sup>Required</sup> <a name="mapLongVarcharAs" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs"></a>

```java
public java.lang.String getMapLongVarcharAs();
```

- *Type:* java.lang.String

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginName"></a>

```java
public java.lang.String getPluginName();
```

- *Type:* java.lang.String

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotName"></a>

```java
public java.lang.String getSlotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointPostgresSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointRedisSettingsOutputReference;

new DmsEndpointRedisSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">resetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">resetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">resetSslSecurityProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthPassword` <a name="resetAuthPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```java
public void resetAuthPassword()
```

##### `resetAuthUserName` <a name="resetAuthUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```java
public void resetAuthUserName()
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```java
public void resetSslCaCertificateArn()
```

##### `resetSslSecurityProtocol` <a name="resetSslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```java
public void resetSslSecurityProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">authPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">authUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">sslSecurityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authPasswordInput`<sup>Optional</sup> <a name="authPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```java
public java.lang.String getAuthPasswordInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authUserNameInput`<sup>Optional</sup> <a name="authUserNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```java
public java.lang.String getAuthUserNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```java
public java.lang.String getSslCaCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `sslSecurityProtocolInput`<sup>Optional</sup> <a name="sslSecurityProtocolInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```java
public java.lang.String getSslSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```java
public java.lang.String getSslCaCertificateArn();
```

- *Type:* java.lang.String

---

##### `sslSecurityProtocol`<sup>Required</sup> <a name="sslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```java
public java.lang.String getSslSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointRedisSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointRedshiftSettingsOutputReference;

new DmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```java
public void resetBucketFolder()
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```java
public void resetEncryptionMode()
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```java
public void resetServerSideEncryptionKmsKeyId()
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```java
public void resetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```java
public java.lang.String getBucketFolderInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```java
public java.lang.String getEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```java
public java.lang.String getServiceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```java
public java.lang.String getBucketFolder();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```java
public java.lang.String getEncryptionMode();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```java
public java.lang.String getServerSideEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```java
public java.lang.String getServiceAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```java
public DmsEndpointRedshiftSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointTimeoutsOutputReference <a name="DmsEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_endpoint.DmsEndpointTimeoutsOutputReference;

new DmsEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---



