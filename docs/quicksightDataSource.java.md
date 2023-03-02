# `quicksightDataSource` Submodule <a name="`quicksightDataSource` Submodule" id="@cdktf/provider-aws.quicksightDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSource <a name="QuicksightDataSource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source aws_quicksight_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSource;

QuicksightDataSource.Builder.create(Construct scope, java.lang.String id)
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
    .dataSourceId(java.lang.String)
    .name(java.lang.String)
    .parameters(QuicksightDataSourceParameters)
    .type(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .credentials(QuicksightDataSourceCredentials)
//  .id(java.lang.String)
//  .permission(IResolvable)
//  .permission(java.util.List<QuicksightDataSourcePermission>)
//  .sslProperties(QuicksightDataSourceSslProperties)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConnectionProperties(QuicksightDataSourceVpcConnectionProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.permission">permission</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>></code> | permission block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.sslProperties">sslProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | ssl_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.vpcConnectionProperties">vpcConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | vpc_connection_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#parameters QuicksightDataSource#parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credentials QuicksightDataSource#credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.permission"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>>

permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#permission QuicksightDataSource#permission}

---

##### `sslProperties`<sup>Optional</sup> <a name="sslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.sslProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

ssl_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}.

---

##### `vpcConnectionProperties`<sup>Optional</sup> <a name="vpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.Initializer.parameter.vpcConnectionProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

vpc_connection_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission">putPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties">putSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties">putVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission">resetPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties">resetSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties">resetVpcConnectionProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials"></a>

```java
public void putCredentials(QuicksightDataSourceCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters"></a>

```java
public void putParameters(QuicksightDataSourceParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---

##### `putPermission` <a name="putPermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission"></a>

```java
public void putPermission(IResolvable OR java.util.List<QuicksightDataSourcePermission> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putPermission.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>>

---

##### `putSslProperties` <a name="putSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties"></a>

```java
public void putSslProperties(QuicksightDataSourceSslProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putSslProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---

##### `putVpcConnectionProperties` <a name="putVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties"></a>

```java
public void putVpcConnectionProperties(QuicksightDataSourceVpcConnectionProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.putVpcConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetId"></a>

```java
public void resetId()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetPermission"></a>

```java
public void resetPermission()
```

##### `resetSslProperties` <a name="resetSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetSslProperties"></a>

```java
public void resetSslProperties()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVpcConnectionProperties` <a name="resetVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.resetVpcConnectionProperties"></a>

```java
public void resetVpcConnectionProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSource;

QuicksightDataSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSource;

QuicksightDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSource;

QuicksightDataSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission">permission</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties">sslProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties">vpcConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput">parametersInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput">permissionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput">sslPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput">vpcConnectionPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentials"></a>

```java
public QuicksightDataSourceCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference">QuicksightDataSourceCredentialsOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parameters"></a>

```java
public QuicksightDataSourceParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference">QuicksightDataSourceParametersOutputReference</a>

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permission"></a>

```java
public QuicksightDataSourcePermissionList getPermission();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList">QuicksightDataSourcePermissionList</a>

---

##### `sslProperties`<sup>Required</sup> <a name="sslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslProperties"></a>

```java
public QuicksightDataSourceSslPropertiesOutputReference getSslProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference">QuicksightDataSourceSslPropertiesOutputReference</a>

---

##### `vpcConnectionProperties`<sup>Required</sup> <a name="vpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionProperties"></a>

```java
public QuicksightDataSourceVpcConnectionPropertiesOutputReference getVpcConnectionProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference">QuicksightDataSourceVpcConnectionPropertiesOutputReference</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.credentialsInput"></a>

```java
public QuicksightDataSourceCredentials getCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.parametersInput"></a>

```java
public QuicksightDataSourceParameters getParametersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.permissionInput"></a>

```java
public java.lang.Object getPermissionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>>

---

##### `sslPropertiesInput`<sup>Optional</sup> <a name="sslPropertiesInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.sslPropertiesInput"></a>

```java
public QuicksightDataSourceSslProperties getSslPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcConnectionPropertiesInput`<sup>Optional</sup> <a name="vpcConnectionPropertiesInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.vpcConnectionPropertiesInput"></a>

```java
public QuicksightDataSourceVpcConnectionProperties getVpcConnectionPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSourceConfig <a name="QuicksightDataSourceConfig" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceConfig;

QuicksightDataSourceConfig.builder()
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
    .dataSourceId(java.lang.String)
    .name(java.lang.String)
    .parameters(QuicksightDataSourceParameters)
    .type(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .credentials(QuicksightDataSourceCredentials)
//  .id(java.lang.String)
//  .permission(IResolvable)
//  .permission(java.util.List<QuicksightDataSourcePermission>)
//  .sslProperties(QuicksightDataSourceSslProperties)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConnectionProperties(QuicksightDataSourceVpcConnectionProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission">permission</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>></code> | permission block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties">sslProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | ssl_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties">vpcConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | vpc_connection_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#name QuicksightDataSource#name}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.parameters"></a>

```java
public QuicksightDataSourceParameters getParameters();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#parameters QuicksightDataSource#parameters}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#type QuicksightDataSource#type}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.credentials"></a>

```java
public QuicksightDataSourceCredentials getCredentials();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credentials QuicksightDataSource#credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#id QuicksightDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.permission"></a>

```java
public java.lang.Object getPermission();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>>

permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#permission QuicksightDataSource#permission}

---

##### `sslProperties`<sup>Optional</sup> <a name="sslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.sslProperties"></a>

```java
public QuicksightDataSourceSslProperties getSslProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

ssl_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags QuicksightDataSource#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#tags_all QuicksightDataSource#tags_all}.

---

##### `vpcConnectionProperties`<sup>Optional</sup> <a name="vpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceConfig.property.vpcConnectionProperties"></a>

```java
public QuicksightDataSourceVpcConnectionProperties getVpcConnectionProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

vpc_connection_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}

---

### QuicksightDataSourceCredentials <a name="QuicksightDataSourceCredentials" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceCredentials;

QuicksightDataSourceCredentials.builder()
//  .copySourceArn(java.lang.String)
//  .credentialPair(QuicksightDataSourceCredentialsCredentialPair)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn">copySourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair">credentialPair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | credential_pair block. |

---

##### `copySourceArn`<sup>Optional</sup> <a name="copySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.copySourceArn"></a>

```java
public java.lang.String getCopySourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}.

---

##### `credentialPair`<sup>Optional</sup> <a name="credentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials.property.credentialPair"></a>

```java
public QuicksightDataSourceCredentialsCredentialPair getCredentialPair();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

credential_pair block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}

---

### QuicksightDataSourceCredentialsCredentialPair <a name="QuicksightDataSourceCredentialsCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceCredentialsCredentialPair;

QuicksightDataSourceCredentialsCredentialPair.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#password QuicksightDataSource#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#username QuicksightDataSource#username}.

---

### QuicksightDataSourceParameters <a name="QuicksightDataSourceParameters" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParameters;

QuicksightDataSourceParameters.builder()
//  .amazonElasticsearch(QuicksightDataSourceParametersAmazonElasticsearch)
//  .athena(QuicksightDataSourceParametersAthena)
//  .aurora(QuicksightDataSourceParametersAurora)
//  .auroraPostgresql(QuicksightDataSourceParametersAuroraPostgresql)
//  .awsIotAnalytics(QuicksightDataSourceParametersAwsIotAnalytics)
//  .jira(QuicksightDataSourceParametersJira)
//  .mariaDb(QuicksightDataSourceParametersMariaDb)
//  .mysql(QuicksightDataSourceParametersMysql)
//  .oracle(QuicksightDataSourceParametersOracle)
//  .postgresql(QuicksightDataSourceParametersPostgresql)
//  .presto(QuicksightDataSourceParametersPresto)
//  .rds(QuicksightDataSourceParametersRds)
//  .redshift(QuicksightDataSourceParametersRedshift)
//  .s3(QuicksightDataSourceParametersS3)
//  .serviceNow(QuicksightDataSourceParametersServiceNow)
//  .snowflake(QuicksightDataSourceParametersSnowflake)
//  .spark(QuicksightDataSourceParametersSpark)
//  .sqlServer(QuicksightDataSourceParametersSqlServer)
//  .teradata(QuicksightDataSourceParametersTeradata)
//  .twitter(QuicksightDataSourceParametersTwitter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch">amazonElasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | amazon_elasticsearch block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena">athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | athena block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora">aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | aurora block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql">auroraPostgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | aurora_postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics">awsIotAnalytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | aws_iot_analytics block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | jira block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb">mariaDb</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | oracle block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto">presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | presto block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | rds block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | redshift block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | service_now block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | snowflake block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer">sqlServer</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | sql_server block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata">teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | teradata block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | twitter block. |

---

##### `amazonElasticsearch`<sup>Optional</sup> <a name="amazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.amazonElasticsearch"></a>

```java
public QuicksightDataSourceParametersAmazonElasticsearch getAmazonElasticsearch();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

amazon_elasticsearch block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}

---

##### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.athena"></a>

```java
public QuicksightDataSourceParametersAthena getAthena();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

athena block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#athena QuicksightDataSource#athena}

---

##### `aurora`<sup>Optional</sup> <a name="aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.aurora"></a>

```java
public QuicksightDataSourceParametersAurora getAurora();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

aurora block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora QuicksightDataSource#aurora}

---

##### `auroraPostgresql`<sup>Optional</sup> <a name="auroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.auroraPostgresql"></a>

```java
public QuicksightDataSourceParametersAuroraPostgresql getAuroraPostgresql();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

aurora_postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aurora_postgresql QuicksightDataSource#aurora_postgresql}

---

##### `awsIotAnalytics`<sup>Optional</sup> <a name="awsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.awsIotAnalytics"></a>

```java
public QuicksightDataSourceParametersAwsIotAnalytics getAwsIotAnalytics();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

aws_iot_analytics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.jira"></a>

```java
public QuicksightDataSourceParametersJira getJira();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

jira block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#jira QuicksightDataSource#jira}

---

##### `mariaDb`<sup>Optional</sup> <a name="mariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mariaDb"></a>

```java
public QuicksightDataSourceParametersMariaDb getMariaDb();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#maria_db QuicksightDataSource#maria_db}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.mysql"></a>

```java
public QuicksightDataSourceParametersMysql getMysql();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#mysql QuicksightDataSource#mysql}

---

##### `oracle`<sup>Optional</sup> <a name="oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.oracle"></a>

```java
public QuicksightDataSourceParametersOracle getOracle();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

oracle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#oracle QuicksightDataSource#oracle}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.postgresql"></a>

```java
public QuicksightDataSourceParametersPostgresql getPostgresql();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#postgresql QuicksightDataSource#postgresql}

---

##### `presto`<sup>Optional</sup> <a name="presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.presto"></a>

```java
public QuicksightDataSourceParametersPresto getPresto();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

presto block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#presto QuicksightDataSource#presto}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.rds"></a>

```java
public QuicksightDataSourceParametersRds getRds();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

rds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#rds QuicksightDataSource#rds}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.redshift"></a>

```java
public QuicksightDataSourceParametersRedshift getRedshift();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

redshift block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#redshift QuicksightDataSource#redshift}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.s3"></a>

```java
public QuicksightDataSourceParametersS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#s3 QuicksightDataSource#s3}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.serviceNow"></a>

```java
public QuicksightDataSourceParametersServiceNow getServiceNow();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

service_now block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#service_now QuicksightDataSource#service_now}

---

##### `snowflake`<sup>Optional</sup> <a name="snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.snowflake"></a>

```java
public QuicksightDataSourceParametersSnowflake getSnowflake();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

snowflake block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#snowflake QuicksightDataSource#snowflake}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.spark"></a>

```java
public QuicksightDataSourceParametersSpark getSpark();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

spark block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#spark QuicksightDataSource#spark}

---

##### `sqlServer`<sup>Optional</sup> <a name="sqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.sqlServer"></a>

```java
public QuicksightDataSourceParametersSqlServer getSqlServer();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

sql_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#sql_server QuicksightDataSource#sql_server}

---

##### `teradata`<sup>Optional</sup> <a name="teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.teradata"></a>

```java
public QuicksightDataSourceParametersTeradata getTeradata();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

teradata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#teradata QuicksightDataSource#teradata}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters.property.twitter"></a>

```java
public QuicksightDataSourceParametersTwitter getTwitter();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#twitter QuicksightDataSource#twitter}

---

### QuicksightDataSourceParametersAmazonElasticsearch <a name="QuicksightDataSourceParametersAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAmazonElasticsearch;

QuicksightDataSourceParametersAmazonElasticsearch.builder()
    .domain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#domain QuicksightDataSource#domain}.

---

### QuicksightDataSourceParametersAthena <a name="QuicksightDataSourceParametersAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAthena;

QuicksightDataSourceParametersAthena.builder()
//  .workGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup">workGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}. |

---

##### `workGroup`<sup>Optional</sup> <a name="workGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena.property.workGroup"></a>

```java
public java.lang.String getWorkGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#work_group QuicksightDataSource#work_group}.

---

### QuicksightDataSourceParametersAurora <a name="QuicksightDataSourceParametersAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAurora;

QuicksightDataSourceParametersAurora.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAuroraPostgresql <a name="QuicksightDataSourceParametersAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAuroraPostgresql;

QuicksightDataSourceParametersAuroraPostgresql.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersAwsIotAnalytics <a name="QuicksightDataSourceParametersAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAwsIotAnalytics;

QuicksightDataSourceParametersAwsIotAnalytics.builder()
    .dataSetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName">dataSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}. |

---

##### `dataSetName`<sup>Required</sup> <a name="dataSetName" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics.property.dataSetName"></a>

```java
public java.lang.String getDataSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}.

---

### QuicksightDataSourceParametersJira <a name="QuicksightDataSourceParametersJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersJira;

QuicksightDataSourceParametersJira.builder()
    .siteBaseUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl">siteBaseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira.property.siteBaseUrl"></a>

```java
public java.lang.String getSiteBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersMariaDb <a name="QuicksightDataSourceParametersMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersMariaDb;

QuicksightDataSourceParametersMariaDb.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersMysql <a name="QuicksightDataSourceParametersMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersMysql;

QuicksightDataSourceParametersMysql.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersOracle <a name="QuicksightDataSourceParametersOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersOracle;

QuicksightDataSourceParametersOracle.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPostgresql <a name="QuicksightDataSourceParametersPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersPostgresql;

QuicksightDataSourceParametersPostgresql.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersPresto <a name="QuicksightDataSourceParametersPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersPresto;

QuicksightDataSourceParametersPresto.builder()
    .catalog(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#catalog QuicksightDataSource#catalog}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersRds <a name="QuicksightDataSourceParametersRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersRds;

QuicksightDataSourceParametersRds.builder()
    .database(java.lang.String)
    .instanceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#instance_id QuicksightDataSource#instance_id}.

---

### QuicksightDataSourceParametersRedshift <a name="QuicksightDataSourceParametersRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersRedshift;

QuicksightDataSourceParametersRedshift.builder()
    .database(java.lang.String)
//  .clusterId(java.lang.String)
//  .host(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersS3 <a name="QuicksightDataSourceParametersS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersS3;

QuicksightDataSourceParametersS3.builder()
    .manifestFileLocation(QuicksightDataSourceParametersS3ManifestFileLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation">manifestFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | manifest_file_location block. |

---

##### `manifestFileLocation`<sup>Required</sup> <a name="manifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3.property.manifestFileLocation"></a>

```java
public QuicksightDataSourceParametersS3ManifestFileLocation getManifestFileLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

manifest_file_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}

---

### QuicksightDataSourceParametersS3ManifestFileLocation <a name="QuicksightDataSourceParametersS3ManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersS3ManifestFileLocation;

QuicksightDataSourceParametersS3ManifestFileLocation.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#bucket QuicksightDataSource#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#key QuicksightDataSource#key}.

---

### QuicksightDataSourceParametersServiceNow <a name="QuicksightDataSourceParametersServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersServiceNow;

QuicksightDataSourceParametersServiceNow.builder()
    .siteBaseUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl">siteBaseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}. |

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow.property.siteBaseUrl"></a>

```java
public java.lang.String getSiteBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}.

---

### QuicksightDataSourceParametersSnowflake <a name="QuicksightDataSourceParametersSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersSnowflake;

QuicksightDataSourceParametersSnowflake.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .warehouse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#warehouse QuicksightDataSource#warehouse}.

---

### QuicksightDataSourceParametersSpark <a name="QuicksightDataSourceParametersSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersSpark;

QuicksightDataSourceParametersSpark.builder()
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersSqlServer <a name="QuicksightDataSourceParametersSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersSqlServer;

QuicksightDataSourceParametersSqlServer.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTeradata <a name="QuicksightDataSourceParametersTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersTeradata;

QuicksightDataSourceParametersTeradata.builder()
    .database(java.lang.String)
    .host(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#database QuicksightDataSource#database}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#host QuicksightDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#port QuicksightDataSource#port}.

---

### QuicksightDataSourceParametersTwitter <a name="QuicksightDataSourceParametersTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersTwitter;

QuicksightDataSourceParametersTwitter.builder()
    .maxRows(java.lang.Number)
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows">maxRows</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}. |

---

##### `maxRows`<sup>Required</sup> <a name="maxRows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.maxRows"></a>

```java
public java.lang.Number getMaxRows();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#max_rows QuicksightDataSource#max_rows}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#query QuicksightDataSource#query}.

---

### QuicksightDataSourcePermission <a name="QuicksightDataSourcePermission" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourcePermission;

QuicksightDataSourcePermission.builder()
    .actions(java.util.List<java.lang.String>)
    .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#actions QuicksightDataSource#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#principal QuicksightDataSource#principal}.

---

### QuicksightDataSourceSslProperties <a name="QuicksightDataSourceSslProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceSslProperties;

QuicksightDataSourceSslProperties.builder()
    .disableSsl(java.lang.Boolean)
    .disableSsl(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl">disableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}. |

---

##### `disableSsl`<sup>Required</sup> <a name="disableSsl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties.property.disableSsl"></a>

```java
public java.lang.Object getDisableSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}.

---

### QuicksightDataSourceVpcConnectionProperties <a name="QuicksightDataSourceVpcConnectionProperties" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceVpcConnectionProperties;

QuicksightDataSourceVpcConnectionProperties.builder()
    .vpcConnectionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}. |

---

##### `vpcConnectionArn`<sup>Required</sup> <a name="vpcConnectionArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties.property.vpcConnectionArn"></a>

```java
public java.lang.String getVpcConnectionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSourceCredentialsCredentialPairOutputReference <a name="QuicksightDataSourceCredentialsCredentialPairOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceCredentialsCredentialPairOutputReference;

new QuicksightDataSourceCredentialsCredentialPairOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceCredentialsCredentialPair getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---


### QuicksightDataSourceCredentialsOutputReference <a name="QuicksightDataSourceCredentialsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceCredentialsOutputReference;

new QuicksightDataSourceCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair">putCredentialPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn">resetCopySourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair">resetCredentialPair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentialPair` <a name="putCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair"></a>

```java
public void putCredentialPair(QuicksightDataSourceCredentialsCredentialPair value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.putCredentialPair.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---

##### `resetCopySourceArn` <a name="resetCopySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCopySourceArn"></a>

```java
public void resetCopySourceArn()
```

##### `resetCredentialPair` <a name="resetCredentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.resetCredentialPair"></a>

```java
public void resetCredentialPair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair">credentialPair</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput">copySourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput">credentialPairInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn">copySourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialPair`<sup>Required</sup> <a name="credentialPair" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPair"></a>

```java
public QuicksightDataSourceCredentialsCredentialPairOutputReference getCredentialPair();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPairOutputReference">QuicksightDataSourceCredentialsCredentialPairOutputReference</a>

---

##### `copySourceArnInput`<sup>Optional</sup> <a name="copySourceArnInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArnInput"></a>

```java
public java.lang.String getCopySourceArnInput();
```

- *Type:* java.lang.String

---

##### `credentialPairInput`<sup>Optional</sup> <a name="credentialPairInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.credentialPairInput"></a>

```java
public QuicksightDataSourceCredentialsCredentialPair getCredentialPairInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsCredentialPair">QuicksightDataSourceCredentialsCredentialPair</a>

---

##### `copySourceArn`<sup>Required</sup> <a name="copySourceArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.copySourceArn"></a>

```java
public java.lang.String getCopySourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentialsOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceCredentials">QuicksightDataSourceCredentials</a>

---


### QuicksightDataSourceParametersAmazonElasticsearchOutputReference <a name="QuicksightDataSourceParametersAmazonElasticsearchOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAmazonElasticsearchOutputReference;

new QuicksightDataSourceParametersAmazonElasticsearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersAmazonElasticsearch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---


### QuicksightDataSourceParametersAthenaOutputReference <a name="QuicksightDataSourceParametersAthenaOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAthenaOutputReference;

new QuicksightDataSourceParametersAthenaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup">resetWorkGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkGroup` <a name="resetWorkGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.resetWorkGroup"></a>

```java
public void resetWorkGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput">workGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup">workGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workGroupInput`<sup>Optional</sup> <a name="workGroupInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroupInput"></a>

```java
public java.lang.String getWorkGroupInput();
```

- *Type:* java.lang.String

---

##### `workGroup`<sup>Required</sup> <a name="workGroup" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.workGroup"></a>

```java
public java.lang.String getWorkGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersAthena getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---


### QuicksightDataSourceParametersAuroraOutputReference <a name="QuicksightDataSourceParametersAuroraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAuroraOutputReference;

new QuicksightDataSourceParametersAuroraOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersAurora getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---


### QuicksightDataSourceParametersAuroraPostgresqlOutputReference <a name="QuicksightDataSourceParametersAuroraPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAuroraPostgresqlOutputReference;

new QuicksightDataSourceParametersAuroraPostgresqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersAuroraPostgresql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---


### QuicksightDataSourceParametersAwsIotAnalyticsOutputReference <a name="QuicksightDataSourceParametersAwsIotAnalyticsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference;

new QuicksightDataSourceParametersAwsIotAnalyticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput">dataSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName">dataSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSetNameInput`<sup>Optional</sup> <a name="dataSetNameInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetNameInput"></a>

```java
public java.lang.String getDataSetNameInput();
```

- *Type:* java.lang.String

---

##### `dataSetName`<sup>Required</sup> <a name="dataSetName" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.dataSetName"></a>

```java
public java.lang.String getDataSetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersAwsIotAnalytics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---


### QuicksightDataSourceParametersJiraOutputReference <a name="QuicksightDataSourceParametersJiraOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersJiraOutputReference;

new QuicksightDataSourceParametersJiraOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput">siteBaseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl">siteBaseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `siteBaseUrlInput`<sup>Optional</sup> <a name="siteBaseUrlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrlInput"></a>

```java
public java.lang.String getSiteBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.siteBaseUrl"></a>

```java
public java.lang.String getSiteBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersJira getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---


### QuicksightDataSourceParametersMariaDbOutputReference <a name="QuicksightDataSourceParametersMariaDbOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersMariaDbOutputReference;

new QuicksightDataSourceParametersMariaDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersMariaDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---


### QuicksightDataSourceParametersMysqlOutputReference <a name="QuicksightDataSourceParametersMysqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersMysqlOutputReference;

new QuicksightDataSourceParametersMysqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersMysql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---


### QuicksightDataSourceParametersOracleOutputReference <a name="QuicksightDataSourceParametersOracleOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersOracleOutputReference;

new QuicksightDataSourceParametersOracleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersOracle getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---


### QuicksightDataSourceParametersOutputReference <a name="QuicksightDataSourceParametersOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersOutputReference;

new QuicksightDataSourceParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch">putAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena">putAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora">putAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql">putAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics">putAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira">putJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb">putMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql">putMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle">putOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql">putPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto">putPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds">putRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake">putSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer">putSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata">putTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter">putTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch">resetAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena">resetAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora">resetAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql">resetAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics">resetAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira">resetJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb">resetMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql">resetMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle">resetOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql">resetPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto">resetPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds">resetRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake">resetSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer">resetSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata">resetTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter">resetTwitter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonElasticsearch` <a name="putAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch"></a>

```java
public void putAmazonElasticsearch(QuicksightDataSourceParametersAmazonElasticsearch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAmazonElasticsearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---

##### `putAthena` <a name="putAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena"></a>

```java
public void putAthena(QuicksightDataSourceParametersAthena value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAthena.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---

##### `putAurora` <a name="putAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora"></a>

```java
public void putAurora(QuicksightDataSourceParametersAurora value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAurora.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---

##### `putAuroraPostgresql` <a name="putAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql"></a>

```java
public void putAuroraPostgresql(QuicksightDataSourceParametersAuroraPostgresql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAuroraPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---

##### `putAwsIotAnalytics` <a name="putAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics"></a>

```java
public void putAwsIotAnalytics(QuicksightDataSourceParametersAwsIotAnalytics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putAwsIotAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---

##### `putJira` <a name="putJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira"></a>

```java
public void putJira(QuicksightDataSourceParametersJira value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---

##### `putMariaDb` <a name="putMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb"></a>

```java
public void putMariaDb(QuicksightDataSourceParametersMariaDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMariaDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---

##### `putMysql` <a name="putMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql"></a>

```java
public void putMysql(QuicksightDataSourceParametersMysql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putMysql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---

##### `putOracle` <a name="putOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle"></a>

```java
public void putOracle(QuicksightDataSourceParametersOracle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putOracle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---

##### `putPostgresql` <a name="putPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql"></a>

```java
public void putPostgresql(QuicksightDataSourceParametersPostgresql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPostgresql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---

##### `putPresto` <a name="putPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto"></a>

```java
public void putPresto(QuicksightDataSourceParametersPresto value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putPresto.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---

##### `putRds` <a name="putRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds"></a>

```java
public void putRds(QuicksightDataSourceParametersRds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---

##### `putRedshift` <a name="putRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift"></a>

```java
public void putRedshift(QuicksightDataSourceParametersRedshift value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putRedshift.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3"></a>

```java
public void putS3(QuicksightDataSourceParametersS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow"></a>

```java
public void putServiceNow(QuicksightDataSourceParametersServiceNow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---

##### `putSnowflake` <a name="putSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake"></a>

```java
public void putSnowflake(QuicksightDataSourceParametersSnowflake value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark"></a>

```java
public void putSpark(QuicksightDataSourceParametersSpark value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---

##### `putSqlServer` <a name="putSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer"></a>

```java
public void putSqlServer(QuicksightDataSourceParametersSqlServer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putSqlServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---

##### `putTeradata` <a name="putTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata"></a>

```java
public void putTeradata(QuicksightDataSourceParametersTeradata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTeradata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---

##### `putTwitter` <a name="putTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter"></a>

```java
public void putTwitter(QuicksightDataSourceParametersTwitter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---

##### `resetAmazonElasticsearch` <a name="resetAmazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAmazonElasticsearch"></a>

```java
public void resetAmazonElasticsearch()
```

##### `resetAthena` <a name="resetAthena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAthena"></a>

```java
public void resetAthena()
```

##### `resetAurora` <a name="resetAurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAurora"></a>

```java
public void resetAurora()
```

##### `resetAuroraPostgresql` <a name="resetAuroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAuroraPostgresql"></a>

```java
public void resetAuroraPostgresql()
```

##### `resetAwsIotAnalytics` <a name="resetAwsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetAwsIotAnalytics"></a>

```java
public void resetAwsIotAnalytics()
```

##### `resetJira` <a name="resetJira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetJira"></a>

```java
public void resetJira()
```

##### `resetMariaDb` <a name="resetMariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMariaDb"></a>

```java
public void resetMariaDb()
```

##### `resetMysql` <a name="resetMysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetMysql"></a>

```java
public void resetMysql()
```

##### `resetOracle` <a name="resetOracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetOracle"></a>

```java
public void resetOracle()
```

##### `resetPostgresql` <a name="resetPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPostgresql"></a>

```java
public void resetPostgresql()
```

##### `resetPresto` <a name="resetPresto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetPresto"></a>

```java
public void resetPresto()
```

##### `resetRds` <a name="resetRds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRds"></a>

```java
public void resetRds()
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetRedshift"></a>

```java
public void resetRedshift()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetS3"></a>

```java
public void resetS3()
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetServiceNow"></a>

```java
public void resetServiceNow()
```

##### `resetSnowflake` <a name="resetSnowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSnowflake"></a>

```java
public void resetSnowflake()
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSpark"></a>

```java
public void resetSpark()
```

##### `resetSqlServer` <a name="resetSqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetSqlServer"></a>

```java
public void resetSqlServer()
```

##### `resetTeradata` <a name="resetTeradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTeradata"></a>

```java
public void resetTeradata()
```

##### `resetTwitter` <a name="resetTwitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.resetTwitter"></a>

```java
public void resetTwitter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch">amazonElasticsearch</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena">athena</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora">aurora</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql">auroraPostgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics">awsIotAnalytics</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb">mariaDb</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle">oracle</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto">presto</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds">rds</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake">snowflake</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer">sqlServer</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata">teradata</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput">amazonElasticsearchInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput">athenaInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput">auroraInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput">auroraPostgresqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput">awsIotAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput">jiraInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput">mariaDbInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput">mysqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput">oracleInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput">postgresqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput">prestoInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput">rdsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput">redshiftInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput">snowflakeInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput">sqlServerInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput">teradataInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput">twitterInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonElasticsearch`<sup>Required</sup> <a name="amazonElasticsearch" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearch"></a>

```java
public QuicksightDataSourceParametersAmazonElasticsearchOutputReference getAmazonElasticsearch();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearchOutputReference">QuicksightDataSourceParametersAmazonElasticsearchOutputReference</a>

---

##### `athena`<sup>Required</sup> <a name="athena" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athena"></a>

```java
public QuicksightDataSourceParametersAthenaOutputReference getAthena();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthenaOutputReference">QuicksightDataSourceParametersAthenaOutputReference</a>

---

##### `aurora`<sup>Required</sup> <a name="aurora" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.aurora"></a>

```java
public QuicksightDataSourceParametersAuroraOutputReference getAurora();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraOutputReference">QuicksightDataSourceParametersAuroraOutputReference</a>

---

##### `auroraPostgresql`<sup>Required</sup> <a name="auroraPostgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresql"></a>

```java
public QuicksightDataSourceParametersAuroraPostgresqlOutputReference getAuroraPostgresql();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresqlOutputReference">QuicksightDataSourceParametersAuroraPostgresqlOutputReference</a>

---

##### `awsIotAnalytics`<sup>Required</sup> <a name="awsIotAnalytics" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalytics"></a>

```java
public QuicksightDataSourceParametersAwsIotAnalyticsOutputReference getAwsIotAnalytics();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalyticsOutputReference">QuicksightDataSourceParametersAwsIotAnalyticsOutputReference</a>

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jira"></a>

```java
public QuicksightDataSourceParametersJiraOutputReference getJira();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJiraOutputReference">QuicksightDataSourceParametersJiraOutputReference</a>

---

##### `mariaDb`<sup>Required</sup> <a name="mariaDb" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDb"></a>

```java
public QuicksightDataSourceParametersMariaDbOutputReference getMariaDb();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDbOutputReference">QuicksightDataSourceParametersMariaDbOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysql"></a>

```java
public QuicksightDataSourceParametersMysqlOutputReference getMysql();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysqlOutputReference">QuicksightDataSourceParametersMysqlOutputReference</a>

---

##### `oracle`<sup>Required</sup> <a name="oracle" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracle"></a>

```java
public QuicksightDataSourceParametersOracleOutputReference getOracle();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracleOutputReference">QuicksightDataSourceParametersOracleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresql"></a>

```java
public QuicksightDataSourceParametersPostgresqlOutputReference getPostgresql();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference">QuicksightDataSourceParametersPostgresqlOutputReference</a>

---

##### `presto`<sup>Required</sup> <a name="presto" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.presto"></a>

```java
public QuicksightDataSourceParametersPrestoOutputReference getPresto();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference">QuicksightDataSourceParametersPrestoOutputReference</a>

---

##### `rds`<sup>Required</sup> <a name="rds" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rds"></a>

```java
public QuicksightDataSourceParametersRdsOutputReference getRds();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference">QuicksightDataSourceParametersRdsOutputReference</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshift"></a>

```java
public QuicksightDataSourceParametersRedshiftOutputReference getRedshift();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference">QuicksightDataSourceParametersRedshiftOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3"></a>

```java
public QuicksightDataSourceParametersS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference">QuicksightDataSourceParametersS3OutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNow"></a>

```java
public QuicksightDataSourceParametersServiceNowOutputReference getServiceNow();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference">QuicksightDataSourceParametersServiceNowOutputReference</a>

---

##### `snowflake`<sup>Required</sup> <a name="snowflake" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflake"></a>

```java
public QuicksightDataSourceParametersSnowflakeOutputReference getSnowflake();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference">QuicksightDataSourceParametersSnowflakeOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.spark"></a>

```java
public QuicksightDataSourceParametersSparkOutputReference getSpark();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference">QuicksightDataSourceParametersSparkOutputReference</a>

---

##### `sqlServer`<sup>Required</sup> <a name="sqlServer" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServer"></a>

```java
public QuicksightDataSourceParametersSqlServerOutputReference getSqlServer();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference">QuicksightDataSourceParametersSqlServerOutputReference</a>

---

##### `teradata`<sup>Required</sup> <a name="teradata" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradata"></a>

```java
public QuicksightDataSourceParametersTeradataOutputReference getTeradata();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference">QuicksightDataSourceParametersTeradataOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitter"></a>

```java
public QuicksightDataSourceParametersTwitterOutputReference getTwitter();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference">QuicksightDataSourceParametersTwitterOutputReference</a>

---

##### `amazonElasticsearchInput`<sup>Optional</sup> <a name="amazonElasticsearchInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.amazonElasticsearchInput"></a>

```java
public QuicksightDataSourceParametersAmazonElasticsearch getAmazonElasticsearchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAmazonElasticsearch">QuicksightDataSourceParametersAmazonElasticsearch</a>

---

##### `athenaInput`<sup>Optional</sup> <a name="athenaInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.athenaInput"></a>

```java
public QuicksightDataSourceParametersAthena getAthenaInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAthena">QuicksightDataSourceParametersAthena</a>

---

##### `auroraInput`<sup>Optional</sup> <a name="auroraInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraInput"></a>

```java
public QuicksightDataSourceParametersAurora getAuroraInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAurora">QuicksightDataSourceParametersAurora</a>

---

##### `auroraPostgresqlInput`<sup>Optional</sup> <a name="auroraPostgresqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.auroraPostgresqlInput"></a>

```java
public QuicksightDataSourceParametersAuroraPostgresql getAuroraPostgresqlInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAuroraPostgresql">QuicksightDataSourceParametersAuroraPostgresql</a>

---

##### `awsIotAnalyticsInput`<sup>Optional</sup> <a name="awsIotAnalyticsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.awsIotAnalyticsInput"></a>

```java
public QuicksightDataSourceParametersAwsIotAnalytics getAwsIotAnalyticsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersAwsIotAnalytics">QuicksightDataSourceParametersAwsIotAnalytics</a>

---

##### `jiraInput`<sup>Optional</sup> <a name="jiraInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.jiraInput"></a>

```java
public QuicksightDataSourceParametersJira getJiraInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersJira">QuicksightDataSourceParametersJira</a>

---

##### `mariaDbInput`<sup>Optional</sup> <a name="mariaDbInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mariaDbInput"></a>

```java
public QuicksightDataSourceParametersMariaDb getMariaDbInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMariaDb">QuicksightDataSourceParametersMariaDb</a>

---

##### `mysqlInput`<sup>Optional</sup> <a name="mysqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.mysqlInput"></a>

```java
public QuicksightDataSourceParametersMysql getMysqlInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersMysql">QuicksightDataSourceParametersMysql</a>

---

##### `oracleInput`<sup>Optional</sup> <a name="oracleInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.oracleInput"></a>

```java
public QuicksightDataSourceParametersOracle getOracleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOracle">QuicksightDataSourceParametersOracle</a>

---

##### `postgresqlInput`<sup>Optional</sup> <a name="postgresqlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.postgresqlInput"></a>

```java
public QuicksightDataSourceParametersPostgresql getPostgresqlInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---

##### `prestoInput`<sup>Optional</sup> <a name="prestoInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.prestoInput"></a>

```java
public QuicksightDataSourceParametersPresto getPrestoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---

##### `rdsInput`<sup>Optional</sup> <a name="rdsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.rdsInput"></a>

```java
public QuicksightDataSourceParametersRds getRdsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.redshiftInput"></a>

```java
public QuicksightDataSourceParametersRedshift getRedshiftInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.s3Input"></a>

```java
public QuicksightDataSourceParametersS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.serviceNowInput"></a>

```java
public QuicksightDataSourceParametersServiceNow getServiceNowInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---

##### `snowflakeInput`<sup>Optional</sup> <a name="snowflakeInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.snowflakeInput"></a>

```java
public QuicksightDataSourceParametersSnowflake getSnowflakeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sparkInput"></a>

```java
public QuicksightDataSourceParametersSpark getSparkInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---

##### `sqlServerInput`<sup>Optional</sup> <a name="sqlServerInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.sqlServerInput"></a>

```java
public QuicksightDataSourceParametersSqlServer getSqlServerInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---

##### `teradataInput`<sup>Optional</sup> <a name="teradataInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.teradataInput"></a>

```java
public QuicksightDataSourceParametersTeradata getTeradataInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---

##### `twitterInput`<sup>Optional</sup> <a name="twitterInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.twitterInput"></a>

```java
public QuicksightDataSourceParametersTwitter getTwitterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParameters">QuicksightDataSourceParameters</a>

---


### QuicksightDataSourceParametersPostgresqlOutputReference <a name="QuicksightDataSourceParametersPostgresqlOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersPostgresqlOutputReference;

new QuicksightDataSourceParametersPostgresqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresqlOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersPostgresql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPostgresql">QuicksightDataSourceParametersPostgresql</a>

---


### QuicksightDataSourceParametersPrestoOutputReference <a name="QuicksightDataSourceParametersPrestoOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersPrestoOutputReference;

new QuicksightDataSourceParametersPrestoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPrestoOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersPresto getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersPresto">QuicksightDataSourceParametersPresto</a>

---


### QuicksightDataSourceParametersRdsOutputReference <a name="QuicksightDataSourceParametersRdsOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersRdsOutputReference;

new QuicksightDataSourceParametersRdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRdsOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersRds getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRds">QuicksightDataSourceParametersRds</a>

---


### QuicksightDataSourceParametersRedshiftOutputReference <a name="QuicksightDataSourceParametersRedshiftOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersRedshiftOutputReference;

new QuicksightDataSourceParametersRedshiftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshiftOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersRedshift getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersRedshift">QuicksightDataSourceParametersRedshift</a>

---


### QuicksightDataSourceParametersS3ManifestFileLocationOutputReference <a name="QuicksightDataSourceParametersS3ManifestFileLocationOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference;

new QuicksightDataSourceParametersS3ManifestFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersS3ManifestFileLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---


### QuicksightDataSourceParametersS3OutputReference <a name="QuicksightDataSourceParametersS3OutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersS3OutputReference;

new QuicksightDataSourceParametersS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation">putManifestFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManifestFileLocation` <a name="putManifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation"></a>

```java
public void putManifestFileLocation(QuicksightDataSourceParametersS3ManifestFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.putManifestFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation">manifestFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput">manifestFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manifestFileLocation`<sup>Required</sup> <a name="manifestFileLocation" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocation"></a>

```java
public QuicksightDataSourceParametersS3ManifestFileLocationOutputReference getManifestFileLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocationOutputReference">QuicksightDataSourceParametersS3ManifestFileLocationOutputReference</a>

---

##### `manifestFileLocationInput`<sup>Optional</sup> <a name="manifestFileLocationInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.manifestFileLocationInput"></a>

```java
public QuicksightDataSourceParametersS3ManifestFileLocation getManifestFileLocationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3ManifestFileLocation">QuicksightDataSourceParametersS3ManifestFileLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3OutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersS3">QuicksightDataSourceParametersS3</a>

---


### QuicksightDataSourceParametersServiceNowOutputReference <a name="QuicksightDataSourceParametersServiceNowOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersServiceNowOutputReference;

new QuicksightDataSourceParametersServiceNowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput">siteBaseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl">siteBaseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `siteBaseUrlInput`<sup>Optional</sup> <a name="siteBaseUrlInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrlInput"></a>

```java
public java.lang.String getSiteBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `siteBaseUrl`<sup>Required</sup> <a name="siteBaseUrl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.siteBaseUrl"></a>

```java
public java.lang.String getSiteBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNowOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersServiceNow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersServiceNow">QuicksightDataSourceParametersServiceNow</a>

---


### QuicksightDataSourceParametersSnowflakeOutputReference <a name="QuicksightDataSourceParametersSnowflakeOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersSnowflakeOutputReference;

new QuicksightDataSourceParametersSnowflakeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflakeOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersSnowflake getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSnowflake">QuicksightDataSourceParametersSnowflake</a>

---


### QuicksightDataSourceParametersSparkOutputReference <a name="QuicksightDataSourceParametersSparkOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersSparkOutputReference;

new QuicksightDataSourceParametersSparkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSparkOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersSpark getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSpark">QuicksightDataSourceParametersSpark</a>

---


### QuicksightDataSourceParametersSqlServerOutputReference <a name="QuicksightDataSourceParametersSqlServerOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersSqlServerOutputReference;

new QuicksightDataSourceParametersSqlServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServerOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersSqlServer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersSqlServer">QuicksightDataSourceParametersSqlServer</a>

---


### QuicksightDataSourceParametersTeradataOutputReference <a name="QuicksightDataSourceParametersTeradataOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersTeradataOutputReference;

new QuicksightDataSourceParametersTeradataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradataOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersTeradata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTeradata">QuicksightDataSourceParametersTeradata</a>

---


### QuicksightDataSourceParametersTwitterOutputReference <a name="QuicksightDataSourceParametersTwitterOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceParametersTwitterOutputReference;

new QuicksightDataSourceParametersTwitterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput">maxRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows">maxRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRowsInput`<sup>Optional</sup> <a name="maxRowsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRowsInput"></a>

```java
public java.lang.Number getMaxRowsInput();
```

- *Type:* java.lang.Number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `maxRows`<sup>Required</sup> <a name="maxRows" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.maxRows"></a>

```java
public java.lang.Number getMaxRows();
```

- *Type:* java.lang.Number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitterOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceParametersTwitter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceParametersTwitter">QuicksightDataSourceParametersTwitter</a>

---


### QuicksightDataSourcePermissionList <a name="QuicksightDataSourcePermissionList" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourcePermissionList;

new QuicksightDataSourcePermissionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get"></a>

```java
public QuicksightDataSourcePermissionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a>>

---


### QuicksightDataSourcePermissionOutputReference <a name="QuicksightDataSourcePermissionOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourcePermissionOutputReference;

new QuicksightDataSourcePermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermissionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourcePermission">QuicksightDataSourcePermission</a> OR com.hashicorp.cdktf.IResolvable

---


### QuicksightDataSourceSslPropertiesOutputReference <a name="QuicksightDataSourceSslPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceSslPropertiesOutputReference;

new QuicksightDataSourceSslPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput">disableSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl">disableSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableSslInput`<sup>Optional</sup> <a name="disableSslInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSslInput"></a>

```java
public java.lang.Object getDisableSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableSsl`<sup>Required</sup> <a name="disableSsl" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.disableSsl"></a>

```java
public java.lang.Object getDisableSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslPropertiesOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceSslProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceSslProperties">QuicksightDataSourceSslProperties</a>

---


### QuicksightDataSourceVpcConnectionPropertiesOutputReference <a name="QuicksightDataSourceVpcConnectionPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_data_source.QuicksightDataSourceVpcConnectionPropertiesOutputReference;

new QuicksightDataSourceVpcConnectionPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">vpcConnectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcConnectionArnInput`<sup>Optional</sup> <a name="vpcConnectionArnInput" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```java
public java.lang.String getVpcConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `vpcConnectionArn`<sup>Required</sup> <a name="vpcConnectionArn" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```java
public java.lang.String getVpcConnectionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```java
public QuicksightDataSourceVpcConnectionProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSource.QuicksightDataSourceVpcConnectionProperties">QuicksightDataSourceVpcConnectionProperties</a>

---



