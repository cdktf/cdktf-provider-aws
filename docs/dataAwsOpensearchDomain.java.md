# `dataAwsOpensearchDomain` Submodule <a name="`dataAwsOpensearchDomain` Submodule" id="@cdktf/provider-aws.dataAwsOpensearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchDomain <a name="DataAwsOpensearchDomain" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain aws_opensearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomain;

DataAwsOpensearchDomain.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
//  .id(java.lang.String)
//  .offPeakWindowOptions(DataAwsOpensearchDomainOffPeakWindowOptions)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#domain_name DataAwsOpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#id DataAwsOpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.offPeakWindowOptions">offPeakWindowOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a></code> | off_peak_window_options block. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#tags DataAwsOpensearchDomain#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#domain_name DataAwsOpensearchDomain#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#id DataAwsOpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offPeakWindowOptions`<sup>Optional</sup> <a name="offPeakWindowOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.offPeakWindowOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a>

off_peak_window_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#off_peak_window_options DataAwsOpensearchDomain#off_peak_window_options}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#region DataAwsOpensearchDomain#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#tags DataAwsOpensearchDomain#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.putOffPeakWindowOptions">putOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetOffPeakWindowOptions">resetOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putOffPeakWindowOptions` <a name="putOffPeakWindowOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.putOffPeakWindowOptions"></a>

```java
public void putOffPeakWindowOptions(DataAwsOpensearchDomainOffPeakWindowOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.putOffPeakWindowOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetId"></a>

```java
public void resetId()
```

##### `resetOffPeakWindowOptions` <a name="resetOffPeakWindowOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetOffPeakWindowOptions"></a>

```java
public void resetOffPeakWindowOptions()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOpensearchDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomain;

DataAwsOpensearchDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomain;

DataAwsOpensearchDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomain;

DataAwsOpensearchDomain.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomain;

DataAwsOpensearchDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOpensearchDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsOpensearchDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOpensearchDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOpensearchDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.accessPolicies">accessPolicies</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedOptions">advancedOptions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList">DataAwsOpensearchDomainAdvancedSecurityOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList">DataAwsOpensearchDomainAutoTuneOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList">DataAwsOpensearchDomainClusterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList">DataAwsOpensearchDomainCognitoOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.created">created</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dashboardEndpoint">dashboardEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dashboardEndpointV2">dashboardEndpointV2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.deleted">deleted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainEndpointV2HostedZoneId">domainEndpointV2HostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList">DataAwsOpensearchDomainEbsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList">DataAwsOpensearchDomainEncryptionAtRestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.endpointV2">endpointV2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList">DataAwsOpensearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList">DataAwsOpensearchDomainNodeToNodeEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.offPeakWindowOptions">offPeakWindowOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference">DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.processing">processing</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList">DataAwsOpensearchDomainSnapshotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.softwareUpdateOptions">softwareUpdateOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList">DataAwsOpensearchDomainSoftwareUpdateOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList">DataAwsOpensearchDomainVpcOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.offPeakWindowOptionsInput">offPeakWindowOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.accessPolicies"></a>

```java
public java.lang.String getAccessPolicies();
```

- *Type:* java.lang.String

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedOptions"></a>

```java
public StringMap getAdvancedOptions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedSecurityOptions"></a>

```java
public DataAwsOpensearchDomainAdvancedSecurityOptionsList getAdvancedSecurityOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList">DataAwsOpensearchDomainAdvancedSecurityOptionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoTuneOptions`<sup>Required</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.autoTuneOptions"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsList getAutoTuneOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList">DataAwsOpensearchDomainAutoTuneOptionsList</a>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.clusterConfig"></a>

```java
public DataAwsOpensearchDomainClusterConfigList getClusterConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList">DataAwsOpensearchDomainClusterConfigList</a>

---

##### `cognitoOptions`<sup>Required</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cognitoOptions"></a>

```java
public DataAwsOpensearchDomainCognitoOptionsList getCognitoOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList">DataAwsOpensearchDomainCognitoOptionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.created"></a>

```java
public IResolvable getCreated();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dashboardEndpoint`<sup>Required</sup> <a name="dashboardEndpoint" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dashboardEndpoint"></a>

```java
public java.lang.String getDashboardEndpoint();
```

- *Type:* java.lang.String

---

##### `dashboardEndpointV2`<sup>Required</sup> <a name="dashboardEndpointV2" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dashboardEndpointV2"></a>

```java
public java.lang.String getDashboardEndpointV2();
```

- *Type:* java.lang.String

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.deleted"></a>

```java
public IResolvable getDeleted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainEndpointV2HostedZoneId`<sup>Required</sup> <a name="domainEndpointV2HostedZoneId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainEndpointV2HostedZoneId"></a>

```java
public java.lang.String getDomainEndpointV2HostedZoneId();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `ebsOptions`<sup>Required</sup> <a name="ebsOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.ebsOptions"></a>

```java
public DataAwsOpensearchDomainEbsOptionsList getEbsOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList">DataAwsOpensearchDomainEbsOptionsList</a>

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.encryptionAtRest"></a>

```java
public DataAwsOpensearchDomainEncryptionAtRestList getEncryptionAtRest();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList">DataAwsOpensearchDomainEncryptionAtRestList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `endpointV2`<sup>Required</sup> <a name="endpointV2" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.endpointV2"></a>

```java
public java.lang.String getEndpointV2();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.logPublishingOptions"></a>

```java
public DataAwsOpensearchDomainLogPublishingOptionsList getLogPublishingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList">DataAwsOpensearchDomainLogPublishingOptionsList</a>

---

##### `nodeToNodeEncryption`<sup>Required</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.nodeToNodeEncryption"></a>

```java
public DataAwsOpensearchDomainNodeToNodeEncryptionList getNodeToNodeEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList">DataAwsOpensearchDomainNodeToNodeEncryptionList</a>

---

##### `offPeakWindowOptions`<sup>Required</sup> <a name="offPeakWindowOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.offPeakWindowOptions"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference getOffPeakWindowOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference">DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference</a>

---

##### `processing`<sup>Required</sup> <a name="processing" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.processing"></a>

```java
public IResolvable getProcessing();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `snapshotOptions`<sup>Required</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.snapshotOptions"></a>

```java
public DataAwsOpensearchDomainSnapshotOptionsList getSnapshotOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList">DataAwsOpensearchDomainSnapshotOptionsList</a>

---

##### `softwareUpdateOptions`<sup>Required</sup> <a name="softwareUpdateOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.softwareUpdateOptions"></a>

```java
public DataAwsOpensearchDomainSoftwareUpdateOptionsList getSoftwareUpdateOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList">DataAwsOpensearchDomainSoftwareUpdateOptionsList</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.vpcOptions"></a>

```java
public DataAwsOpensearchDomainVpcOptionsList getVpcOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList">DataAwsOpensearchDomainVpcOptionsList</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `offPeakWindowOptionsInput`<sup>Optional</sup> <a name="offPeakWindowOptionsInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.offPeakWindowOptionsInput"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptions getOffPeakWindowOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchDomainAdvancedSecurityOptions <a name="DataAwsOpensearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAdvancedSecurityOptions;

DataAwsOpensearchDomainAdvancedSecurityOptions.builder()
    .build();
```


### DataAwsOpensearchDomainAutoTuneOptions <a name="DataAwsOpensearchDomainAutoTuneOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptions;

DataAwsOpensearchDomainAutoTuneOptions.builder()
    .build();
```


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule;

DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule.builder()
    .build();
```


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration;

DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.builder()
    .build();
```


### DataAwsOpensearchDomainClusterConfig <a name="DataAwsOpensearchDomainClusterConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfig;

DataAwsOpensearchDomainClusterConfig.builder()
    .build();
```


### DataAwsOpensearchDomainClusterConfigColdStorageOptions <a name="DataAwsOpensearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigColdStorageOptions;

DataAwsOpensearchDomainClusterConfigColdStorageOptions.builder()
    .build();
```


### DataAwsOpensearchDomainClusterConfigNodeOptions <a name="DataAwsOpensearchDomainClusterConfigNodeOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigNodeOptions;

DataAwsOpensearchDomainClusterConfigNodeOptions.builder()
    .build();
```


### DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig <a name="DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig;

DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig.builder()
    .build();
```


### DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig <a name="DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig;

DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig.builder()
    .build();
```


### DataAwsOpensearchDomainCognitoOptions <a name="DataAwsOpensearchDomainCognitoOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainCognitoOptions;

DataAwsOpensearchDomainCognitoOptions.builder()
    .build();
```


### DataAwsOpensearchDomainConfig <a name="DataAwsOpensearchDomainConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainConfig;

DataAwsOpensearchDomainConfig.builder()
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
    .domainName(java.lang.String)
//  .id(java.lang.String)
//  .offPeakWindowOptions(DataAwsOpensearchDomainOffPeakWindowOptions)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#domain_name DataAwsOpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#id DataAwsOpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.offPeakWindowOptions">offPeakWindowOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a></code> | off_peak_window_options block. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#tags DataAwsOpensearchDomain#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#domain_name DataAwsOpensearchDomain#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#id DataAwsOpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offPeakWindowOptions`<sup>Optional</sup> <a name="offPeakWindowOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.offPeakWindowOptions"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptions getOffPeakWindowOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a>

off_peak_window_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#off_peak_window_options DataAwsOpensearchDomain#off_peak_window_options}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#region DataAwsOpensearchDomain#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/data-sources/opensearch_domain#tags DataAwsOpensearchDomain#tags}.

---

### DataAwsOpensearchDomainEbsOptions <a name="DataAwsOpensearchDomainEbsOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainEbsOptions;

DataAwsOpensearchDomainEbsOptions.builder()
    .build();
```


### DataAwsOpensearchDomainEncryptionAtRest <a name="DataAwsOpensearchDomainEncryptionAtRest" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainEncryptionAtRest;

DataAwsOpensearchDomainEncryptionAtRest.builder()
    .build();
```


### DataAwsOpensearchDomainLogPublishingOptions <a name="DataAwsOpensearchDomainLogPublishingOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainLogPublishingOptions;

DataAwsOpensearchDomainLogPublishingOptions.builder()
    .build();
```


### DataAwsOpensearchDomainNodeToNodeEncryption <a name="DataAwsOpensearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainNodeToNodeEncryption;

DataAwsOpensearchDomainNodeToNodeEncryption.builder()
    .build();
```


### DataAwsOpensearchDomainOffPeakWindowOptions <a name="DataAwsOpensearchDomainOffPeakWindowOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptions;

DataAwsOpensearchDomainOffPeakWindowOptions.builder()
    .build();
```


### DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow <a name="DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow;

DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow.builder()
    .build();
```


### DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime <a name="DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime;

DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime.builder()
    .build();
```


### DataAwsOpensearchDomainSnapshotOptions <a name="DataAwsOpensearchDomainSnapshotOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainSnapshotOptions;

DataAwsOpensearchDomainSnapshotOptions.builder()
    .build();
```


### DataAwsOpensearchDomainSoftwareUpdateOptions <a name="DataAwsOpensearchDomainSoftwareUpdateOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainSoftwareUpdateOptions;

DataAwsOpensearchDomainSoftwareUpdateOptions.builder()
    .build();
```


### DataAwsOpensearchDomainVpcOptions <a name="DataAwsOpensearchDomainVpcOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainVpcOptions;

DataAwsOpensearchDomainVpcOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchDomainAdvancedSecurityOptionsList <a name="DataAwsOpensearchDomainAdvancedSecurityOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAdvancedSecurityOptionsList;

new DataAwsOpensearchDomainAdvancedSecurityOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.get"></a>

```java
public DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference <a name="DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference;

new DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">anonymousAuthEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions">DataAwsOpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anonymousAuthEnabled`<sup>Required</sup> <a name="anonymousAuthEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```java
public IResolvable getAnonymousAuthEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```java
public IResolvable getInternalUserDatabaseEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainAdvancedSecurityOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions">DataAwsOpensearchDomainAdvancedSecurityOptions</a>

---


### DataAwsOpensearchDomainAutoTuneOptionsList <a name="DataAwsOpensearchDomainAutoTuneOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsList;

new DataAwsOpensearchDomainAutoTuneOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.get"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList;

new DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;

new DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList;

new DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference;

new DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">startAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```java
public java.lang.String getCronExpressionForRecurrence();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList getDuration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a>

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```java
public java.lang.String getStartAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>

---


### DataAwsOpensearchDomainAutoTuneOptionsOutputReference <a name="DataAwsOpensearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference;

new DataAwsOpensearchDomainAutoTuneOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.useOffPeakWindow">useOffPeakWindow</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions">DataAwsOpensearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList getMaintenanceSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `rollbackOnDisable`<sup>Required</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```java
public java.lang.String getRollbackOnDisable();
```

- *Type:* java.lang.String

---

##### `useOffPeakWindow`<sup>Required</sup> <a name="useOffPeakWindow" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.useOffPeakWindow"></a>

```java
public IResolvable getUseOffPeakWindow();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainAutoTuneOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions">DataAwsOpensearchDomainAutoTuneOptions</a>

---


### DataAwsOpensearchDomainClusterConfigColdStorageOptionsList <a name="DataAwsOpensearchDomainClusterConfigColdStorageOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList;

new DataAwsOpensearchDomainClusterConfigColdStorageOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.get"></a>

```java
public DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference <a name="DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference;

new DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions">DataAwsOpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainClusterConfigColdStorageOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions">DataAwsOpensearchDomainClusterConfigColdStorageOptions</a>

---


### DataAwsOpensearchDomainClusterConfigList <a name="DataAwsOpensearchDomainClusterConfigList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigList;

new DataAwsOpensearchDomainClusterConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.get"></a>

```java
public DataAwsOpensearchDomainClusterConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainClusterConfigNodeOptionsList <a name="DataAwsOpensearchDomainClusterConfigNodeOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigNodeOptionsList;

new DataAwsOpensearchDomainClusterConfigNodeOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.get"></a>

```java
public DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList <a name="DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList;

new DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.get"></a>

```java
public DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference <a name="DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference;

new DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig">DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig">DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfig</a>

---


### DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference <a name="DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference;

new DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList">DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptions">DataAwsOpensearchDomainClusterConfigNodeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeConfig"></a>

```java
public DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList">DataAwsOpensearchDomainClusterConfigNodeOptionsNodeConfigList</a>

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainClusterConfigNodeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptions">DataAwsOpensearchDomainClusterConfigNodeOptions</a>

---


### DataAwsOpensearchDomainClusterConfigOutputReference <a name="DataAwsOpensearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigOutputReference;

new DataAwsOpensearchDomainClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList">DataAwsOpensearchDomainClusterConfigColdStorageOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled">multiAzWithStandbyEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.nodeOptions">nodeOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList">DataAwsOpensearchDomainClusterConfigNodeOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmCount">warmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmEnabled">warmEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmType">warmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig">DataAwsOpensearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coldStorageOptions`<sup>Required</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```java
public DataAwsOpensearchDomainClusterConfigColdStorageOptionsList getColdStorageOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList">DataAwsOpensearchDomainClusterConfigColdStorageOptionsList</a>

---

##### `dedicatedMasterCount`<sup>Required</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```java
public java.lang.Number getDedicatedMasterCount();
```

- *Type:* java.lang.Number

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```java
public IResolvable getDedicatedMasterEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```java
public java.lang.String getDedicatedMasterType();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `multiAzWithStandbyEnabled`<sup>Required</sup> <a name="multiAzWithStandbyEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.multiAzWithStandbyEnabled"></a>

```java
public IResolvable getMultiAzWithStandbyEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nodeOptions`<sup>Required</sup> <a name="nodeOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.nodeOptions"></a>

```java
public DataAwsOpensearchDomainClusterConfigNodeOptionsList getNodeOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigNodeOptionsList">DataAwsOpensearchDomainClusterConfigNodeOptionsList</a>

---

##### `warmCount`<sup>Required</sup> <a name="warmCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmCount"></a>

```java
public java.lang.Number getWarmCount();
```

- *Type:* java.lang.Number

---

##### `warmEnabled`<sup>Required</sup> <a name="warmEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```java
public IResolvable getWarmEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `warmType`<sup>Required</sup> <a name="warmType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmType"></a>

```java
public java.lang.String getWarmType();
```

- *Type:* java.lang.String

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```java
public DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList getZoneAwarenessConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList</a>

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```java
public IResolvable getZoneAwarenessEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainClusterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig">DataAwsOpensearchDomainClusterConfig</a>

---


### DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList <a name="DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList;

new DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.get"></a>

```java
public DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference;

new DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneCount`<sup>Required</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```java
public java.lang.Number getAvailabilityZoneCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig</a>

---


### DataAwsOpensearchDomainCognitoOptionsList <a name="DataAwsOpensearchDomainCognitoOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainCognitoOptionsList;

new DataAwsOpensearchDomainCognitoOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.get"></a>

```java
public DataAwsOpensearchDomainCognitoOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainCognitoOptionsOutputReference <a name="DataAwsOpensearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainCognitoOptionsOutputReference;

new DataAwsOpensearchDomainCognitoOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions">DataAwsOpensearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainCognitoOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions">DataAwsOpensearchDomainCognitoOptions</a>

---


### DataAwsOpensearchDomainEbsOptionsList <a name="DataAwsOpensearchDomainEbsOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainEbsOptionsList;

new DataAwsOpensearchDomainEbsOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.get"></a>

```java
public DataAwsOpensearchDomainEbsOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainEbsOptionsOutputReference <a name="DataAwsOpensearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainEbsOptionsOutputReference;

new DataAwsOpensearchDomainEbsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions">DataAwsOpensearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```java
public IResolvable getEbsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainEbsOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions">DataAwsOpensearchDomainEbsOptions</a>

---


### DataAwsOpensearchDomainEncryptionAtRestList <a name="DataAwsOpensearchDomainEncryptionAtRestList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainEncryptionAtRestList;

new DataAwsOpensearchDomainEncryptionAtRestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.get"></a>

```java
public DataAwsOpensearchDomainEncryptionAtRestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainEncryptionAtRestOutputReference <a name="DataAwsOpensearchDomainEncryptionAtRestOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainEncryptionAtRestOutputReference;

new DataAwsOpensearchDomainEncryptionAtRestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest">DataAwsOpensearchDomainEncryptionAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainEncryptionAtRest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest">DataAwsOpensearchDomainEncryptionAtRest</a>

---


### DataAwsOpensearchDomainLogPublishingOptionsList <a name="DataAwsOpensearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainLogPublishingOptionsList;

new DataAwsOpensearchDomainLogPublishingOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.get"></a>

```java
public DataAwsOpensearchDomainLogPublishingOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainLogPublishingOptionsOutputReference <a name="DataAwsOpensearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference;

new DataAwsOpensearchDomainLogPublishingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions">DataAwsOpensearchDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainLogPublishingOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions">DataAwsOpensearchDomainLogPublishingOptions</a>

---


### DataAwsOpensearchDomainNodeToNodeEncryptionList <a name="DataAwsOpensearchDomainNodeToNodeEncryptionList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainNodeToNodeEncryptionList;

new DataAwsOpensearchDomainNodeToNodeEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.get"></a>

```java
public DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference <a name="DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference;

new DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption">DataAwsOpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainNodeToNodeEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption">DataAwsOpensearchDomainNodeToNodeEncryption</a>

---


### DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList <a name="DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList;

new DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.get"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference <a name="DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference;

new DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime">windowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.windowStartTime"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList getWindowStartTime();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindow</a>

---


### DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList <a name="DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList;

new DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.get"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference <a name="DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference;

new DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime</a>

---


### DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference <a name="DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference;

new DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow">offPeakWindow</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `offPeakWindow`<sup>Required</sup> <a name="offPeakWindow" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.offPeakWindow"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList getOffPeakWindow();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList">DataAwsOpensearchDomainOffPeakWindowOptionsOffPeakWindowList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainOffPeakWindowOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainOffPeakWindowOptions">DataAwsOpensearchDomainOffPeakWindowOptions</a>

---


### DataAwsOpensearchDomainSnapshotOptionsList <a name="DataAwsOpensearchDomainSnapshotOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainSnapshotOptionsList;

new DataAwsOpensearchDomainSnapshotOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.get"></a>

```java
public DataAwsOpensearchDomainSnapshotOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainSnapshotOptionsOutputReference <a name="DataAwsOpensearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainSnapshotOptionsOutputReference;

new DataAwsOpensearchDomainSnapshotOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions">DataAwsOpensearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```java
public java.lang.Number getAutomatedSnapshotStartHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainSnapshotOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions">DataAwsOpensearchDomainSnapshotOptions</a>

---


### DataAwsOpensearchDomainSoftwareUpdateOptionsList <a name="DataAwsOpensearchDomainSoftwareUpdateOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainSoftwareUpdateOptionsList;

new DataAwsOpensearchDomainSoftwareUpdateOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.get"></a>

```java
public DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference <a name="DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference;

new DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled">autoSoftwareUpdateEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptions">DataAwsOpensearchDomainSoftwareUpdateOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoSoftwareUpdateEnabled`<sup>Required</sup> <a name="autoSoftwareUpdateEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.autoSoftwareUpdateEnabled"></a>

```java
public IResolvable getAutoSoftwareUpdateEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainSoftwareUpdateOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSoftwareUpdateOptions">DataAwsOpensearchDomainSoftwareUpdateOptions</a>

---


### DataAwsOpensearchDomainVpcOptionsList <a name="DataAwsOpensearchDomainVpcOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainVpcOptionsList;

new DataAwsOpensearchDomainVpcOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.get"></a>

```java
public DataAwsOpensearchDomainVpcOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchDomainVpcOptionsOutputReference <a name="DataAwsOpensearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_opensearch_domain.DataAwsOpensearchDomainVpcOptionsOutputReference;

new DataAwsOpensearchDomainVpcOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions">DataAwsOpensearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchDomainVpcOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions">DataAwsOpensearchDomainVpcOptions</a>

---



