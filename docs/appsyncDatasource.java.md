# `appsyncDatasource` Submodule <a name="`appsyncDatasource` Submodule" id="@cdktf/provider-aws.appsyncDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDatasource <a name="AppsyncDatasource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource aws_appsync_datasource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasource;

AppsyncDatasource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .dynamodbConfig(AppsyncDatasourceDynamodbConfig)
//  .elasticsearchConfig(AppsyncDatasourceElasticsearchConfig)
//  .httpConfig(AppsyncDatasourceHttpConfig)
//  .id(java.lang.String)
//  .lambdaConfig(AppsyncDatasourceLambdaConfig)
//  .relationalDatabaseConfig(AppsyncDatasourceRelationalDatabaseConfig)
//  .serviceRoleArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dynamodbConfig">dynamodbConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | dynamodb_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | elasticsearch_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.httpConfig">httpConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | http_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | relational_database_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}.

---

##### `dynamodbConfig`<sup>Optional</sup> <a name="dynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.dynamodbConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

dynamodb_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="elasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.elasticsearchConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

elasticsearch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.httpConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

http_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_config AppsyncDatasource#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="relationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.relationalDatabaseConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

relational_database_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.Initializer.parameter.serviceRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig">putDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig">putElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig">putHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig">putRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig">resetDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig">resetElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig">resetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig">resetRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn">resetServiceRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDynamodbConfig` <a name="putDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig"></a>

```java
public void putDynamodbConfig(AppsyncDatasourceDynamodbConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putDynamodbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---

##### `putElasticsearchConfig` <a name="putElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig"></a>

```java
public void putElasticsearchConfig(AppsyncDatasourceElasticsearchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putElasticsearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---

##### `putHttpConfig` <a name="putHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig"></a>

```java
public void putHttpConfig(AppsyncDatasourceHttpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig"></a>

```java
public void putLambdaConfig(AppsyncDatasourceLambdaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---

##### `putRelationalDatabaseConfig` <a name="putRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig"></a>

```java
public void putRelationalDatabaseConfig(AppsyncDatasourceRelationalDatabaseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.putRelationalDatabaseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDynamodbConfig` <a name="resetDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetDynamodbConfig"></a>

```java
public void resetDynamodbConfig()
```

##### `resetElasticsearchConfig` <a name="resetElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetElasticsearchConfig"></a>

```java
public void resetElasticsearchConfig()
```

##### `resetHttpConfig` <a name="resetHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetHttpConfig"></a>

```java
public void resetHttpConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetId"></a>

```java
public void resetId()
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```

##### `resetRelationalDatabaseConfig` <a name="resetRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetRelationalDatabaseConfig"></a>

```java
public void resetRelationalDatabaseConfig()
```

##### `resetServiceRoleArn` <a name="resetServiceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.resetServiceRoleArn"></a>

```java
public void resetServiceRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasource;

AppsyncDatasource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasource;

AppsyncDatasource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasource;

AppsyncDatasource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig">dynamodbConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput">dynamodbConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput">elasticsearchConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput">httpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput">relationalDatabaseConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dynamodbConfig`<sup>Required</sup> <a name="dynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfig"></a>

```java
public AppsyncDatasourceDynamodbConfigOutputReference getDynamodbConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference">AppsyncDatasourceDynamodbConfigOutputReference</a>

---

##### `elasticsearchConfig`<sup>Required</sup> <a name="elasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfig"></a>

```java
public AppsyncDatasourceElasticsearchConfigOutputReference getElasticsearchConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference">AppsyncDatasourceElasticsearchConfigOutputReference</a>

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfig"></a>

```java
public AppsyncDatasourceHttpConfigOutputReference getHttpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference">AppsyncDatasourceHttpConfigOutputReference</a>

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfig"></a>

```java
public AppsyncDatasourceLambdaConfigOutputReference getLambdaConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference">AppsyncDatasourceLambdaConfigOutputReference</a>

---

##### `relationalDatabaseConfig`<sup>Required</sup> <a name="relationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfig"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfigOutputReference getRelationalDatabaseConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dynamodbConfigInput`<sup>Optional</sup> <a name="dynamodbConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.dynamodbConfigInput"></a>

```java
public AppsyncDatasourceDynamodbConfig getDynamodbConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---

##### `elasticsearchConfigInput`<sup>Optional</sup> <a name="elasticsearchConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.elasticsearchConfigInput"></a>

```java
public AppsyncDatasourceElasticsearchConfig getElasticsearchConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---

##### `httpConfigInput`<sup>Optional</sup> <a name="httpConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.httpConfigInput"></a>

```java
public AppsyncDatasourceHttpConfig getHttpConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.lambdaConfigInput"></a>

```java
public AppsyncDatasourceLambdaConfig getLambdaConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `relationalDatabaseConfigInput`<sup>Optional</sup> <a name="relationalDatabaseConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.relationalDatabaseConfigInput"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfig getRelationalDatabaseConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArnInput"></a>

```java
public java.lang.String getServiceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDatasourceConfig <a name="AppsyncDatasourceConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceConfig;

AppsyncDatasourceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .dynamodbConfig(AppsyncDatasourceDynamodbConfig)
//  .elasticsearchConfig(AppsyncDatasourceElasticsearchConfig)
//  .httpConfig(AppsyncDatasourceHttpConfig)
//  .id(java.lang.String)
//  .lambdaConfig(AppsyncDatasourceLambdaConfig)
//  .relationalDatabaseConfig(AppsyncDatasourceRelationalDatabaseConfig)
//  .serviceRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig">dynamodbConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | dynamodb_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig">elasticsearchConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | elasticsearch_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | http_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig">relationalDatabaseConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | relational_database_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}.

---

##### `dynamodbConfig`<sup>Optional</sup> <a name="dynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.dynamodbConfig"></a>

```java
public AppsyncDatasourceDynamodbConfig getDynamodbConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

dynamodb_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}

---

##### `elasticsearchConfig`<sup>Optional</sup> <a name="elasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.elasticsearchConfig"></a>

```java
public AppsyncDatasourceElasticsearchConfig getElasticsearchConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

elasticsearch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.httpConfig"></a>

```java
public AppsyncDatasourceHttpConfig getHttpConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

http_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_config AppsyncDatasource#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.lambdaConfig"></a>

```java
public AppsyncDatasourceLambdaConfig getLambdaConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}

---

##### `relationalDatabaseConfig`<sup>Optional</sup> <a name="relationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.relationalDatabaseConfig"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfig getRelationalDatabaseConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

relational_database_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceConfig.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}.

---

### AppsyncDatasourceDynamodbConfig <a name="AppsyncDatasourceDynamodbConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceDynamodbConfig;

AppsyncDatasourceDynamodbConfig.builder()
    .tableName(java.lang.String)
//  .deltaSyncConfig(AppsyncDatasourceDynamodbConfigDeltaSyncConfig)
//  .region(java.lang.String)
//  .useCallerCredentials(java.lang.Boolean)
//  .useCallerCredentials(IResolvable)
//  .versioned(java.lang.Boolean)
//  .versioned(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig">deltaSyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | delta_sync_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials">useCallerCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned">versioned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}.

---

##### `deltaSyncConfig`<sup>Optional</sup> <a name="deltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.deltaSyncConfig"></a>

```java
public AppsyncDatasourceDynamodbConfigDeltaSyncConfig getDeltaSyncConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

delta_sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_config AppsyncDatasource#delta_sync_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `useCallerCredentials`<sup>Optional</sup> <a name="useCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.useCallerCredentials"></a>

```java
public java.lang.Object getUseCallerCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig.property.versioned"></a>

```java
public java.lang.Object getVersioned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}.

---

### AppsyncDatasourceDynamodbConfigDeltaSyncConfig <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig;

AppsyncDatasourceDynamodbConfigDeltaSyncConfig.builder()
    .deltaSyncTableName(java.lang.String)
//  .baseTableTtl(java.lang.Number)
//  .deltaSyncTableTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName">deltaSyncTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl">baseTableTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl">deltaSyncTableTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}. |

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="deltaSyncTableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableName"></a>

```java
public java.lang.String getDeltaSyncTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}.

---

##### `baseTableTtl`<sup>Optional</sup> <a name="baseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.baseTableTtl"></a>

```java
public java.lang.Number getBaseTableTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}.

---

##### `deltaSyncTableTtl`<sup>Optional</sup> <a name="deltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig.property.deltaSyncTableTtl"></a>

```java
public java.lang.Number getDeltaSyncTableTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}.

---

### AppsyncDatasourceElasticsearchConfig <a name="AppsyncDatasourceElasticsearchConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceElasticsearchConfig;

AppsyncDatasourceElasticsearchConfig.builder()
    .endpoint(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

### AppsyncDatasourceHttpConfig <a name="AppsyncDatasourceHttpConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceHttpConfig;

AppsyncDatasourceHttpConfig.builder()
    .endpoint(java.lang.String)
//  .authorizationConfig(AppsyncDatasourceHttpConfigAuthorizationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | authorization_config block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}.

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig.property.authorizationConfig"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_config AppsyncDatasource#authorization_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceHttpConfigAuthorizationConfig;

AppsyncDatasourceHttpConfigAuthorizationConfig.builder()
//  .authorizationType(java.lang.String)
//  .awsIamConfig(AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig">awsIamConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | aws_iam_config block. |

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}.

---

##### `awsIamConfig`<sup>Optional</sup> <a name="awsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig.property.awsIamConfig"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig getAwsIamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

aws_iam_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_iam_config AppsyncDatasource#aws_iam_config}

---

### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig;

AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.builder()
//  .signingRegion(java.lang.String)
//  .signingServiceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion">signingRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName">signingServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}. |

---

##### `signingRegion`<sup>Optional</sup> <a name="signingRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingRegion"></a>

```java
public java.lang.String getSigningRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}.

---

##### `signingServiceName`<sup>Optional</sup> <a name="signingServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig.property.signingServiceName"></a>

```java
public java.lang.String getSigningServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}.

---

### AppsyncDatasourceLambdaConfig <a name="AppsyncDatasourceLambdaConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceLambdaConfig;

AppsyncDatasourceLambdaConfig.builder()
    .functionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}. |

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}.

---

### AppsyncDatasourceRelationalDatabaseConfig <a name="AppsyncDatasourceRelationalDatabaseConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceRelationalDatabaseConfig;

AppsyncDatasourceRelationalDatabaseConfig.builder()
//  .httpEndpointConfig(AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig)
//  .sourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig">httpEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | http_endpoint_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}. |

---

##### `httpEndpointConfig`<sup>Optional</sup> <a name="httpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.httpEndpointConfig"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig getHttpEndpointConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

http_endpoint_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_endpoint_config AppsyncDatasource#http_endpoint_config}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}.

---

### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig;

AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.builder()
    .awsSecretStoreArn(java.lang.String)
    .dbClusterIdentifier(java.lang.String)
//  .databaseName(java.lang.String)
//  .region(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn">awsSecretStoreArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}. |

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="awsSecretStoreArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.awsSecretStoreArn"></a>

```java
public java.lang.String getAwsSecretStoreArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}.

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference;

new AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl">resetBaseTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl">resetDeltaSyncTableTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseTableTtl` <a name="resetBaseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetBaseTableTtl"></a>

```java
public void resetBaseTableTtl()
```

##### `resetDeltaSyncTableTtl` <a name="resetDeltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.resetDeltaSyncTableTtl"></a>

```java
public void resetDeltaSyncTableTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput">baseTableTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput">deltaSyncTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput">deltaSyncTableTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">baseTableTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">deltaSyncTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">deltaSyncTableTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseTableTtlInput`<sup>Optional</sup> <a name="baseTableTtlInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtlInput"></a>

```java
public java.lang.Number getBaseTableTtlInput();
```

- *Type:* java.lang.Number

---

##### `deltaSyncTableNameInput`<sup>Optional</sup> <a name="deltaSyncTableNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableNameInput"></a>

```java
public java.lang.String getDeltaSyncTableNameInput();
```

- *Type:* java.lang.String

---

##### `deltaSyncTableTtlInput`<sup>Optional</sup> <a name="deltaSyncTableTtlInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtlInput"></a>

```java
public java.lang.Number getDeltaSyncTableTtlInput();
```

- *Type:* java.lang.Number

---

##### `baseTableTtl`<sup>Required</sup> <a name="baseTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```java
public java.lang.Number getBaseTableTtl();
```

- *Type:* java.lang.Number

---

##### `deltaSyncTableName`<sup>Required</sup> <a name="deltaSyncTableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```java
public java.lang.String getDeltaSyncTableName();
```

- *Type:* java.lang.String

---

##### `deltaSyncTableTtl`<sup>Required</sup> <a name="deltaSyncTableTtl" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```java
public java.lang.Number getDeltaSyncTableTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceDynamodbConfigDeltaSyncConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---


### AppsyncDatasourceDynamodbConfigOutputReference <a name="AppsyncDatasourceDynamodbConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceDynamodbConfigOutputReference;

new AppsyncDatasourceDynamodbConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig">putDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig">resetDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials">resetUseCallerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned">resetVersioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaSyncConfig` <a name="putDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig"></a>

```java
public void putDeltaSyncConfig(AppsyncDatasourceDynamodbConfigDeltaSyncConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.putDeltaSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---

##### `resetDeltaSyncConfig` <a name="resetDeltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetDeltaSyncConfig"></a>

```java
public void resetDeltaSyncConfig()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetUseCallerCredentials` <a name="resetUseCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetUseCallerCredentials"></a>

```java
public void resetUseCallerCredentials()
```

##### `resetVersioned` <a name="resetVersioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.resetVersioned"></a>

```java
public void resetVersioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig">deltaSyncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput">deltaSyncConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput">useCallerCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput">versionedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials">useCallerCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned">versioned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaSyncConfig`<sup>Required</sup> <a name="deltaSyncConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfig"></a>

```java
public AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference getDeltaSyncConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference">AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference</a>

---

##### `deltaSyncConfigInput`<sup>Optional</sup> <a name="deltaSyncConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.deltaSyncConfigInput"></a>

```java
public AppsyncDatasourceDynamodbConfigDeltaSyncConfig getDeltaSyncConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigDeltaSyncConfig">AppsyncDatasourceDynamodbConfigDeltaSyncConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `useCallerCredentialsInput`<sup>Optional</sup> <a name="useCallerCredentialsInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentialsInput"></a>

```java
public java.lang.Object getUseCallerCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionedInput`<sup>Optional</sup> <a name="versionedInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versionedInput"></a>

```java
public java.lang.Object getVersionedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `useCallerCredentials`<sup>Required</sup> <a name="useCallerCredentials" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.useCallerCredentials"></a>

```java
public java.lang.Object getUseCallerCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versioned`<sup>Required</sup> <a name="versioned" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.versioned"></a>

```java
public java.lang.Object getVersioned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceDynamodbConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceDynamodbConfig">AppsyncDatasourceDynamodbConfig</a>

---


### AppsyncDatasourceElasticsearchConfigOutputReference <a name="AppsyncDatasourceElasticsearchConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceElasticsearchConfigOutputReference;

new AppsyncDatasourceElasticsearchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceElasticsearchConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceElasticsearchConfig">AppsyncDatasourceElasticsearchConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference;

new AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion">resetSigningRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName">resetSigningServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSigningRegion` <a name="resetSigningRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningRegion"></a>

```java
public void resetSigningRegion()
```

##### `resetSigningServiceName` <a name="resetSigningServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resetSigningServiceName"></a>

```java
public void resetSigningServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput">signingRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput">signingServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">signingRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">signingServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signingRegionInput`<sup>Optional</sup> <a name="signingRegionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegionInput"></a>

```java
public java.lang.String getSigningRegionInput();
```

- *Type:* java.lang.String

---

##### `signingServiceNameInput`<sup>Optional</sup> <a name="signingServiceNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceNameInput"></a>

```java
public java.lang.String getSigningServiceNameInput();
```

- *Type:* java.lang.String

---

##### `signingRegion`<sup>Required</sup> <a name="signingRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```java
public java.lang.String getSigningRegion();
```

- *Type:* java.lang.String

---

##### `signingServiceName`<sup>Required</sup> <a name="signingServiceName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```java
public java.lang.String getSigningServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference <a name="AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference;

new AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig">putAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig">resetAwsIamConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsIamConfig` <a name="putAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig"></a>

```java
public void putAwsIamConfig(AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.putAwsIamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAwsIamConfig` <a name="resetAwsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.resetAwsIamConfig"></a>

```java
public void resetAwsIamConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">awsIamConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput">awsIamConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsIamConfig`<sup>Required</sup> <a name="awsIamConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference getAwsIamConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `awsIamConfigInput`<sup>Optional</sup> <a name="awsIamConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfigInput"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig getAwsIamConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig">AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---


### AppsyncDatasourceHttpConfigOutputReference <a name="AppsyncDatasourceHttpConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceHttpConfigOutputReference;

new AppsyncDatasourceHttpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(AppsyncDatasourceHttpConfigAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfig"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference">AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.authorizationConfigInput"></a>

```java
public AppsyncDatasourceHttpConfigAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigAuthorizationConfig">AppsyncDatasourceHttpConfigAuthorizationConfig</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceHttpConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceHttpConfig">AppsyncDatasourceHttpConfig</a>

---


### AppsyncDatasourceLambdaConfigOutputReference <a name="AppsyncDatasourceLambdaConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceLambdaConfigOutputReference;

new AppsyncDatasourceLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArnInput"></a>

```java
public java.lang.String getFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceLambdaConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceLambdaConfig">AppsyncDatasourceLambdaConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference;

new AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput">awsSecretStoreArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn">awsSecretStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsSecretStoreArnInput`<sup>Optional</sup> <a name="awsSecretStoreArnInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArnInput"></a>

```java
public java.lang.String getAwsSecretStoreArnInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `awsSecretStoreArn`<sup>Required</sup> <a name="awsSecretStoreArn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```java
public java.lang.String getAwsSecretStoreArn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---


### AppsyncDatasourceRelationalDatabaseConfigOutputReference <a name="AppsyncDatasourceRelationalDatabaseConfigOutputReference" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_datasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference;

new AppsyncDatasourceRelationalDatabaseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig">putHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig">resetHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType">resetSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpEndpointConfig` <a name="putHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig"></a>

```java
public void putHttpEndpointConfig(AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.putHttpEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---

##### `resetHttpEndpointConfig` <a name="resetHttpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetHttpEndpointConfig"></a>

```java
public void resetHttpEndpointConfig()
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.resetSourceType"></a>

```java
public void resetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig">httpEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput">httpEndpointConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpEndpointConfig`<sup>Required</sup> <a name="httpEndpointConfig" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfig"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference getHttpEndpointConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference</a>

---

##### `httpEndpointConfigInput`<sup>Optional</sup> <a name="httpEndpointConfigInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.httpEndpointConfigInput"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig getHttpEndpointConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig">AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig</a>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```java
public AppsyncDatasourceRelationalDatabaseConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncDatasource.AppsyncDatasourceRelationalDatabaseConfig">AppsyncDatasourceRelationalDatabaseConfig</a>

---



