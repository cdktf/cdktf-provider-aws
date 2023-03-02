# `dataAwsRdsEngineVersion` Submodule <a name="`dataAwsRdsEngineVersion` Submodule" id="@cdktf/provider-aws.dataAwsRdsEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsEngineVersion <a name="DataAwsRdsEngineVersion" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version aws_rds_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersion;

DataAwsRdsEngineVersion.Builder.create(Construct scope, java.lang.String id)
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
    .engine(java.lang.String)
//  .defaultOnly(java.lang.Boolean)
//  .defaultOnly(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsRdsEngineVersionFilter>)
//  .id(java.lang.String)
//  .includeAll(java.lang.Boolean)
//  .includeAll(IResolvable)
//  .parameterGroupFamily(java.lang.String)
//  .preferredVersions(java.util.List<java.lang.String>)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.defaultOnly">defaultOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.includeAll">includeAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.parameterGroupFamily">parameterGroupFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.preferredVersions">preferredVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}.

---

##### `defaultOnly`<sup>Optional</sup> <a name="defaultOnly" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.defaultOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#filter DataAwsRdsEngineVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.includeAll"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}.

---

##### `parameterGroupFamily`<sup>Optional</sup> <a name="parameterGroupFamily" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.parameterGroupFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}.

---

##### `preferredVersions`<sup>Optional</sup> <a name="preferredVersions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.preferredVersions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetDefaultOnly">resetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetParameterGroupFamily">resetParameterGroupFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetPreferredVersions">resetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsRdsEngineVersionFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>>

---

##### `resetDefaultOnly` <a name="resetDefaultOnly" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetDefaultOnly"></a>

```java
public void resetDefaultOnly()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetIncludeAll"></a>

```java
public void resetIncludeAll()
```

##### `resetParameterGroupFamily` <a name="resetParameterGroupFamily" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetParameterGroupFamily"></a>

```java
public void resetParameterGroupFamily()
```

##### `resetPreferredVersions` <a name="resetPreferredVersions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetPreferredVersions"></a>

```java
public void resetPreferredVersions()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersion;

DataAwsRdsEngineVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersion;

DataAwsRdsEngineVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersion;

DataAwsRdsEngineVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultCharacterSet">defaultCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineDescription">engineDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.exportableLogTypes">exportableLogTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList">DataAwsRdsEngineVersionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedCharacterSets">supportedCharacterSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedFeatureNames">supportedFeatureNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedModes">supportedModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedTimezones">supportedTimezones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsGlobalDatabases">supportsGlobalDatabases</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsLogExportsToCloudwatch">supportsLogExportsToCloudwatch</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsParallelQuery">supportsParallelQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsReadReplica">supportsReadReplica</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.validUpgradeTargets">validUpgradeTargets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnlyInput">defaultOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAllInput">includeAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamilyInput">parameterGroupFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersionsInput">preferredVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnly">defaultOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamily">parameterGroupFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersions">preferredVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `defaultCharacterSet`<sup>Required</sup> <a name="defaultCharacterSet" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultCharacterSet"></a>

```java
public java.lang.String getDefaultCharacterSet();
```

- *Type:* java.lang.String

---

##### `engineDescription`<sup>Required</sup> <a name="engineDescription" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineDescription"></a>

```java
public java.lang.String getEngineDescription();
```

- *Type:* java.lang.String

---

##### `exportableLogTypes`<sup>Required</sup> <a name="exportableLogTypes" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.exportableLogTypes"></a>

```java
public java.util.List<java.lang.String> getExportableLogTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filter"></a>

```java
public DataAwsRdsEngineVersionFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList">DataAwsRdsEngineVersionFilterList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportedCharacterSets`<sup>Required</sup> <a name="supportedCharacterSets" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedCharacterSets"></a>

```java
public java.util.List<java.lang.String> getSupportedCharacterSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedFeatureNames`<sup>Required</sup> <a name="supportedFeatureNames" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedFeatureNames"></a>

```java
public java.util.List<java.lang.String> getSupportedFeatureNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedModes"></a>

```java
public java.util.List<java.lang.String> getSupportedModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedTimezones`<sup>Required</sup> <a name="supportedTimezones" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedTimezones"></a>

```java
public java.util.List<java.lang.String> getSupportedTimezones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportsGlobalDatabases`<sup>Required</sup> <a name="supportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsGlobalDatabases"></a>

```java
public IResolvable getSupportsGlobalDatabases();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsLogExportsToCloudwatch`<sup>Required</sup> <a name="supportsLogExportsToCloudwatch" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```java
public IResolvable getSupportsLogExportsToCloudwatch();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsParallelQuery`<sup>Required</sup> <a name="supportsParallelQuery" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsParallelQuery"></a>

```java
public IResolvable getSupportsParallelQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsReadReplica`<sup>Required</sup> <a name="supportsReadReplica" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsReadReplica"></a>

```java
public IResolvable getSupportsReadReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `validUpgradeTargets`<sup>Required</sup> <a name="validUpgradeTargets" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.validUpgradeTargets"></a>

```java
public java.util.List<java.lang.String> getValidUpgradeTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

---

##### `defaultOnlyInput`<sup>Optional</sup> <a name="defaultOnlyInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnlyInput"></a>

```java
public java.lang.Object getDefaultOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAllInput"></a>

```java
public java.lang.Object getIncludeAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parameterGroupFamilyInput`<sup>Optional</sup> <a name="parameterGroupFamilyInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamilyInput"></a>

```java
public java.lang.String getParameterGroupFamilyInput();
```

- *Type:* java.lang.String

---

##### `preferredVersionsInput`<sup>Optional</sup> <a name="preferredVersionsInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersionsInput"></a>

```java
public java.util.List<java.lang.String> getPreferredVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `defaultOnly`<sup>Required</sup> <a name="defaultOnly" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnly"></a>

```java
public java.lang.Object getDefaultOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAll"></a>

```java
public java.lang.Object getIncludeAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parameterGroupFamily`<sup>Required</sup> <a name="parameterGroupFamily" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamily"></a>

```java
public java.lang.String getParameterGroupFamily();
```

- *Type:* java.lang.String

---

##### `preferredVersions`<sup>Required</sup> <a name="preferredVersions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersions"></a>

```java
public java.util.List<java.lang.String> getPreferredVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsEngineVersionConfig <a name="DataAwsRdsEngineVersionConfig" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersionConfig;

DataAwsRdsEngineVersionConfig.builder()
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
    .engine(java.lang.String)
//  .defaultOnly(java.lang.Boolean)
//  .defaultOnly(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsRdsEngineVersionFilter>)
//  .id(java.lang.String)
//  .includeAll(java.lang.Boolean)
//  .includeAll(IResolvable)
//  .parameterGroupFamily(java.lang.String)
//  .preferredVersions(java.util.List<java.lang.String>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.defaultOnly">defaultOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.parameterGroupFamily">parameterGroupFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.preferredVersions">preferredVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}.

---

##### `defaultOnly`<sup>Optional</sup> <a name="defaultOnly" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.defaultOnly"></a>

```java
public java.lang.Object getDefaultOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#filter DataAwsRdsEngineVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.includeAll"></a>

```java
public java.lang.Object getIncludeAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}.

---

##### `parameterGroupFamily`<sup>Optional</sup> <a name="parameterGroupFamily" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.parameterGroupFamily"></a>

```java
public java.lang.String getParameterGroupFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}.

---

##### `preferredVersions`<sup>Optional</sup> <a name="preferredVersions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.preferredVersions"></a>

```java
public java.util.List<java.lang.String> getPreferredVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}.

---

### DataAwsRdsEngineVersionFilter <a name="DataAwsRdsEngineVersionFilter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersionFilter;

DataAwsRdsEngineVersionFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#name DataAwsRdsEngineVersion#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#values DataAwsRdsEngineVersion#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#name DataAwsRdsEngineVersion#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#values DataAwsRdsEngineVersion#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsEngineVersionFilterList <a name="DataAwsRdsEngineVersionFilterList" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersionFilterList;

new DataAwsRdsEngineVersionFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get"></a>

```java
public DataAwsRdsEngineVersionFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>>

---


### DataAwsRdsEngineVersionFilterOutputReference <a name="DataAwsRdsEngineVersionFilterOutputReference" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_engine_version.DataAwsRdsEngineVersionFilterOutputReference;

new DataAwsRdsEngineVersionFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a> OR com.hashicorp.cdktf.IResolvable

---



