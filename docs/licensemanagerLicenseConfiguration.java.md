# `licensemanagerLicenseConfiguration` Submodule <a name="`licensemanagerLicenseConfiguration` Submodule" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseConfiguration <a name="LicensemanagerLicenseConfiguration" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration aws_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.licensemanager_license_configuration.LicensemanagerLicenseConfiguration;

LicensemanagerLicenseConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .licenseCountingType(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .licenseCount(java.lang.Number)
//  .licenseCountHardLimit(java.lang.Boolean)
//  .licenseCountHardLimit(IResolvable)
//  .licenseRules(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountingType">licenseCountingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountHardLimit">licenseCountHardLimit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseRules">licenseRules</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `licenseCountingType`<sup>Required</sup> <a name="licenseCountingType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseCount`<sup>Optional</sup> <a name="licenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}.

---

##### `licenseCountHardLimit`<sup>Optional</sup> <a name="licenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseCountHardLimit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}.

---

##### `licenseRules`<sup>Optional</sup> <a name="licenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.licenseRules"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount">resetLicenseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit">resetLicenseCountHardLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules">resetLicenseRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseCount` <a name="resetLicenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount"></a>

```java
public void resetLicenseCount()
```

##### `resetLicenseCountHardLimit` <a name="resetLicenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit"></a>

```java
public void resetLicenseCountHardLimit()
```

##### `resetLicenseRules` <a name="resetLicenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules"></a>

```java
public void resetLicenseRules()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.licensemanager_license_configuration.LicensemanagerLicenseConfiguration;

LicensemanagerLicenseConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.licensemanager_license_configuration.LicensemanagerLicenseConfiguration;

LicensemanagerLicenseConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.licensemanager_license_configuration.LicensemanagerLicenseConfiguration;

LicensemanagerLicenseConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput">licenseCountHardLimitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput">licenseCountingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput">licenseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput">licenseRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit">licenseCountHardLimit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType">licenseCountingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules">licenseRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseCountHardLimitInput`<sup>Optional</sup> <a name="licenseCountHardLimitInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput"></a>

```java
public java.lang.Object getLicenseCountHardLimitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseCountingTypeInput`<sup>Optional</sup> <a name="licenseCountingTypeInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput"></a>

```java
public java.lang.String getLicenseCountingTypeInput();
```

- *Type:* java.lang.String

---

##### `licenseCountInput`<sup>Optional</sup> <a name="licenseCountInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput"></a>

```java
public java.lang.Number getLicenseCountInput();
```

- *Type:* java.lang.Number

---

##### `licenseRulesInput`<sup>Optional</sup> <a name="licenseRulesInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput"></a>

```java
public java.util.List<java.lang.String> getLicenseRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount"></a>

```java
public java.lang.Number getLicenseCount();
```

- *Type:* java.lang.Number

---

##### `licenseCountHardLimit`<sup>Required</sup> <a name="licenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```java
public java.lang.Object getLicenseCountHardLimit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseCountingType`<sup>Required</sup> <a name="licenseCountingType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```java
public java.lang.String getLicenseCountingType();
```

- *Type:* java.lang.String

---

##### `licenseRules`<sup>Required</sup> <a name="licenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules"></a>

```java
public java.util.List<java.lang.String> getLicenseRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfigurationConfig <a name="LicensemanagerLicenseConfigurationConfig" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.licensemanager_license_configuration.LicensemanagerLicenseConfigurationConfig;

LicensemanagerLicenseConfigurationConfig.builder()
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
    .licenseCountingType(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .licenseCount(java.lang.Number)
//  .licenseCountHardLimit(java.lang.Boolean)
//  .licenseCountHardLimit(IResolvable)
//  .licenseRules(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType">licenseCountingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit">licenseCountHardLimit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules">licenseRules</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `licenseCountingType`<sup>Required</sup> <a name="licenseCountingType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType"></a>

```java
public java.lang.String getLicenseCountingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseCount`<sup>Optional</sup> <a name="licenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount"></a>

```java
public java.lang.Number getLicenseCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}.

---

##### `licenseCountHardLimit`<sup>Optional</sup> <a name="licenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit"></a>

```java
public java.lang.Object getLicenseCountHardLimit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}.

---

##### `licenseRules`<sup>Optional</sup> <a name="licenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules"></a>

```java
public java.util.List<java.lang.String> getLicenseRules();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}.

---



