# `devicefarmInstanceProfile` Submodule <a name="`devicefarmInstanceProfile` Submodule" id="@cdktf/provider-aws.devicefarmInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmInstanceProfile <a name="DevicefarmInstanceProfile" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile aws_devicefarm_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .excludeAppPackagesFromCleanup(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .packageCleanup(java.lang.Boolean)
//  .packageCleanup(IResolvable)
//  .rebootAfterUse(java.lang.Boolean)
//  .rebootAfterUse(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.excludeAppPackagesFromCleanup">excludeAppPackagesFromCleanup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.packageCleanup">packageCleanup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.rebootAfterUse">rebootAfterUse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `excludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="excludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.excludeAppPackagesFromCleanup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageCleanup`<sup>Optional</sup> <a name="packageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.packageCleanup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `rebootAfterUse`<sup>Optional</sup> <a name="rebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.rebootAfterUse"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup">resetExcludeAppPackagesFromCleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup">resetPackageCleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse">resetRebootAfterUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcludeAppPackagesFromCleanup` <a name="resetExcludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup"></a>

```java
public void resetExcludeAppPackagesFromCleanup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId"></a>

```java
public void resetId()
```

##### `resetPackageCleanup` <a name="resetPackageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup"></a>

```java
public void resetPackageCleanup()
```

##### `resetRebootAfterUse` <a name="resetRebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse"></a>

```java
public void resetRebootAfterUse()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfile;

DevicefarmInstanceProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput">excludeAppPackagesFromCleanupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput">packageCleanupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput">rebootAfterUseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup">excludeAppPackagesFromCleanup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup">packageCleanup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse">rebootAfterUse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `excludeAppPackagesFromCleanupInput`<sup>Optional</sup> <a name="excludeAppPackagesFromCleanupInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput"></a>

```java
public java.util.List<java.lang.String> getExcludeAppPackagesFromCleanupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `packageCleanupInput`<sup>Optional</sup> <a name="packageCleanupInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput"></a>

```java
public java.lang.Object getPackageCleanupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rebootAfterUseInput`<sup>Optional</sup> <a name="rebootAfterUseInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput"></a>

```java
public java.lang.Object getRebootAfterUseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `excludeAppPackagesFromCleanup`<sup>Required</sup> <a name="excludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

```java
public java.util.List<java.lang.String> getExcludeAppPackagesFromCleanup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packageCleanup`<sup>Required</sup> <a name="packageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup"></a>

```java
public java.lang.Object getPackageCleanup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rebootAfterUse`<sup>Required</sup> <a name="rebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse"></a>

```java
public java.lang.Object getRebootAfterUse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmInstanceProfileConfig <a name="DevicefarmInstanceProfileConfig" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.devicefarm_instance_profile.DevicefarmInstanceProfileConfig;

DevicefarmInstanceProfileConfig.builder()
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .excludeAppPackagesFromCleanup(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .packageCleanup(java.lang.Boolean)
//  .packageCleanup(IResolvable)
//  .rebootAfterUse(java.lang.Boolean)
//  .rebootAfterUse(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup">excludeAppPackagesFromCleanup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup">packageCleanup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse">rebootAfterUse</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `excludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="excludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup"></a>

```java
public java.util.List<java.lang.String> getExcludeAppPackagesFromCleanup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageCleanup`<sup>Optional</sup> <a name="packageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup"></a>

```java
public java.lang.Object getPackageCleanup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `rebootAfterUse`<sup>Optional</sup> <a name="rebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse"></a>

```java
public java.lang.Object getRebootAfterUse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---



