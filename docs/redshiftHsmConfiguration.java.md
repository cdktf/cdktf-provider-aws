# `redshiftHsmConfiguration` Submodule <a name="`redshiftHsmConfiguration` Submodule" id="@cdktf/provider-aws.redshiftHsmConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftHsmConfiguration <a name="RedshiftHsmConfiguration" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration aws_redshift_hsm_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_hsm_configuration.RedshiftHsmConfiguration;

RedshiftHsmConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .hsmConfigurationIdentifier(java.lang.String)
    .hsmIpAddress(java.lang.String)
    .hsmPartitionName(java.lang.String)
    .hsmPartitionPassword(java.lang.String)
    .hsmServerPublicCertificate(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmIpAddress">hsmIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionName">hsmPartitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionPassword">hsmPartitionPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmServerPublicCertificate">hsmServerPublicCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}.

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="hsmConfigurationIdentifier" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmConfigurationIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}.

---

##### `hsmIpAddress`<sup>Required</sup> <a name="hsmIpAddress" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmIpAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}.

---

##### `hsmPartitionName`<sup>Required</sup> <a name="hsmPartitionName" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}.

---

##### `hsmPartitionPassword`<sup>Required</sup> <a name="hsmPartitionPassword" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmPartitionPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}.

---

##### `hsmServerPublicCertificate`<sup>Required</sup> <a name="hsmServerPublicCertificate" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.hsmServerPublicCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_hsm_configuration.RedshiftHsmConfiguration;

RedshiftHsmConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_hsm_configuration.RedshiftHsmConfiguration;

RedshiftHsmConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_hsm_configuration.RedshiftHsmConfiguration;

RedshiftHsmConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifierInput">hsmConfigurationIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddressInput">hsmIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionNameInput">hsmPartitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPasswordInput">hsmPartitionPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificateInput">hsmServerPublicCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddress">hsmIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionName">hsmPartitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPassword">hsmPartitionPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificate">hsmServerPublicCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hsmConfigurationIdentifierInput`<sup>Optional</sup> <a name="hsmConfigurationIdentifierInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifierInput"></a>

```java
public java.lang.String getHsmConfigurationIdentifierInput();
```

- *Type:* java.lang.String

---

##### `hsmIpAddressInput`<sup>Optional</sup> <a name="hsmIpAddressInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddressInput"></a>

```java
public java.lang.String getHsmIpAddressInput();
```

- *Type:* java.lang.String

---

##### `hsmPartitionNameInput`<sup>Optional</sup> <a name="hsmPartitionNameInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionNameInput"></a>

```java
public java.lang.String getHsmPartitionNameInput();
```

- *Type:* java.lang.String

---

##### `hsmPartitionPasswordInput`<sup>Optional</sup> <a name="hsmPartitionPasswordInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPasswordInput"></a>

```java
public java.lang.String getHsmPartitionPasswordInput();
```

- *Type:* java.lang.String

---

##### `hsmServerPublicCertificateInput`<sup>Optional</sup> <a name="hsmServerPublicCertificateInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificateInput"></a>

```java
public java.lang.String getHsmServerPublicCertificateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="hsmConfigurationIdentifier" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmConfigurationIdentifier"></a>

```java
public java.lang.String getHsmConfigurationIdentifier();
```

- *Type:* java.lang.String

---

##### `hsmIpAddress`<sup>Required</sup> <a name="hsmIpAddress" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmIpAddress"></a>

```java
public java.lang.String getHsmIpAddress();
```

- *Type:* java.lang.String

---

##### `hsmPartitionName`<sup>Required</sup> <a name="hsmPartitionName" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionName"></a>

```java
public java.lang.String getHsmPartitionName();
```

- *Type:* java.lang.String

---

##### `hsmPartitionPassword`<sup>Required</sup> <a name="hsmPartitionPassword" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmPartitionPassword"></a>

```java
public java.lang.String getHsmPartitionPassword();
```

- *Type:* java.lang.String

---

##### `hsmServerPublicCertificate`<sup>Required</sup> <a name="hsmServerPublicCertificate" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.hsmServerPublicCertificate"></a>

```java
public java.lang.String getHsmServerPublicCertificate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftHsmConfigurationConfig <a name="RedshiftHsmConfigurationConfig" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_hsm_configuration.RedshiftHsmConfigurationConfig;

RedshiftHsmConfigurationConfig.builder()
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
    .description(java.lang.String)
    .hsmConfigurationIdentifier(java.lang.String)
    .hsmIpAddress(java.lang.String)
    .hsmPartitionName(java.lang.String)
    .hsmPartitionPassword(java.lang.String)
    .hsmServerPublicCertificate(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmIpAddress">hsmIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionName">hsmPartitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionPassword">hsmPartitionPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmServerPublicCertificate">hsmServerPublicCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#description RedshiftHsmConfiguration#description}.

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="hsmConfigurationIdentifier" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmConfigurationIdentifier"></a>

```java
public java.lang.String getHsmConfigurationIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_configuration_identifier RedshiftHsmConfiguration#hsm_configuration_identifier}.

---

##### `hsmIpAddress`<sup>Required</sup> <a name="hsmIpAddress" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmIpAddress"></a>

```java
public java.lang.String getHsmIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_ip_address RedshiftHsmConfiguration#hsm_ip_address}.

---

##### `hsmPartitionName`<sup>Required</sup> <a name="hsmPartitionName" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionName"></a>

```java
public java.lang.String getHsmPartitionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_name RedshiftHsmConfiguration#hsm_partition_name}.

---

##### `hsmPartitionPassword`<sup>Required</sup> <a name="hsmPartitionPassword" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmPartitionPassword"></a>

```java
public java.lang.String getHsmPartitionPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_partition_password RedshiftHsmConfiguration#hsm_partition_password}.

---

##### `hsmServerPublicCertificate`<sup>Required</sup> <a name="hsmServerPublicCertificate" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.hsmServerPublicCertificate"></a>

```java
public java.lang.String getHsmServerPublicCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#hsm_server_public_certificate RedshiftHsmConfiguration#hsm_server_public_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#id RedshiftHsmConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags RedshiftHsmConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftHsmConfiguration.RedshiftHsmConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_hsm_configuration#tags_all RedshiftHsmConfiguration#tags_all}.

---



