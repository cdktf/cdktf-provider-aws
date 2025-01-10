# `sagemakerSpace` Submodule <a name="`sagemakerSpace` Submodule" id="@cdktf/provider-aws.sagemakerSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerSpace <a name="SagemakerSpace" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space aws_sagemaker_space}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpace;

SagemakerSpace.Builder.create(Construct scope, java.lang.String id)
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
    .domainId(java.lang.String)
    .spaceName(java.lang.String)
//  .id(java.lang.String)
//  .ownershipSettings(SagemakerSpaceOwnershipSettings)
//  .spaceDisplayName(java.lang.String)
//  .spaceSettings(SagemakerSpaceSpaceSettings)
//  .spaceSharingSettings(SagemakerSpaceSpaceSharingSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceName">spaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#id SagemakerSpace#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | ownership_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceDisplayName">spaceDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | space_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | space_sharing_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}.

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#id SagemakerSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownershipSettings`<sup>Optional</sup> <a name="ownershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.ownershipSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

ownership_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}

---

##### `spaceDisplayName`<sup>Optional</sup> <a name="spaceDisplayName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceDisplayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}.

---

##### `spaceSettings`<sup>Optional</sup> <a name="spaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

space_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}

---

##### `spaceSharingSettings`<sup>Optional</sup> <a name="spaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.spaceSharingSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

space_sharing_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putOwnershipSettings">putOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSettings">putSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings">putSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOwnershipSettings">resetOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName">resetSpaceDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSettings">resetSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings">resetSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOwnershipSettings` <a name="putOwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putOwnershipSettings"></a>

```java
public void putOwnershipSettings(SagemakerSpaceOwnershipSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putOwnershipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `putSpaceSettings` <a name="putSpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSettings"></a>

```java
public void putSpaceSettings(SagemakerSpaceSpaceSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `putSpaceSharingSettings` <a name="putSpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings"></a>

```java
public void putSpaceSharingSettings(SagemakerSpaceSpaceSharingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.putSpaceSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetId"></a>

```java
public void resetId()
```

##### `resetOwnershipSettings` <a name="resetOwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetOwnershipSettings"></a>

```java
public void resetOwnershipSettings()
```

##### `resetSpaceDisplayName` <a name="resetSpaceDisplayName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceDisplayName"></a>

```java
public void resetSpaceDisplayName()
```

##### `resetSpaceSettings` <a name="resetSpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSettings"></a>

```java
public void resetSpaceSettings()
```

##### `resetSpaceSharingSettings` <a name="resetSpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetSpaceSharingSettings"></a>

```java
public void resetSpaceSharingSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerSpace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpace;

SagemakerSpace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpace;

SagemakerSpace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpace;

SagemakerSpace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpace;

SagemakerSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SagemakerSpace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.homeEfsFileSystemUid">homeEfsFileSystemUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput">ownershipSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput">spaceDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceNameInput">spaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput">spaceSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput">spaceSharingSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayName">spaceDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceName">spaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `homeEfsFileSystemUid`<sup>Required</sup> <a name="homeEfsFileSystemUid" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.homeEfsFileSystemUid"></a>

```java
public java.lang.String getHomeEfsFileSystemUid();
```

- *Type:* java.lang.String

---

##### `ownershipSettings`<sup>Required</sup> <a name="ownershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettings"></a>

```java
public SagemakerSpaceOwnershipSettingsOutputReference getOwnershipSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference">SagemakerSpaceOwnershipSettingsOutputReference</a>

---

##### `spaceSettings`<sup>Required</sup> <a name="spaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettings"></a>

```java
public SagemakerSpaceSpaceSettingsOutputReference getSpaceSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference">SagemakerSpaceSpaceSettingsOutputReference</a>

---

##### `spaceSharingSettings`<sup>Required</sup> <a name="spaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettings"></a>

```java
public SagemakerSpaceSpaceSharingSettingsOutputReference getSpaceSharingSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference">SagemakerSpaceSpaceSharingSettingsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ownershipSettingsInput`<sup>Optional</sup> <a name="ownershipSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.ownershipSettingsInput"></a>

```java
public SagemakerSpaceOwnershipSettings getOwnershipSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---

##### `spaceDisplayNameInput`<sup>Optional</sup> <a name="spaceDisplayNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayNameInput"></a>

```java
public java.lang.String getSpaceDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `spaceNameInput`<sup>Optional</sup> <a name="spaceNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceNameInput"></a>

```java
public java.lang.String getSpaceNameInput();
```

- *Type:* java.lang.String

---

##### `spaceSettingsInput`<sup>Optional</sup> <a name="spaceSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettings getSpaceSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---

##### `spaceSharingSettingsInput`<sup>Optional</sup> <a name="spaceSharingSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceSharingSettingsInput"></a>

```java
public SagemakerSpaceSpaceSharingSettings getSpaceSharingSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `spaceDisplayName`<sup>Required</sup> <a name="spaceDisplayName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceDisplayName"></a>

```java
public java.lang.String getSpaceDisplayName();
```

- *Type:* java.lang.String

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.spaceName"></a>

```java
public java.lang.String getSpaceName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerSpaceConfig <a name="SagemakerSpaceConfig" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceConfig;

SagemakerSpaceConfig.builder()
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
    .domainId(java.lang.String)
    .spaceName(java.lang.String)
//  .id(java.lang.String)
//  .ownershipSettings(SagemakerSpaceOwnershipSettings)
//  .spaceDisplayName(java.lang.String)
//  .spaceSettings(SagemakerSpaceSpaceSettings)
//  .spaceSharingSettings(SagemakerSpaceSpaceSharingSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceName">spaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#id SagemakerSpace#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings">ownershipSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | ownership_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName">spaceDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings">spaceSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | space_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings">spaceSharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | space_sharing_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}.

---

##### `spaceName`<sup>Required</sup> <a name="spaceName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceName"></a>

```java
public java.lang.String getSpaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#id SagemakerSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownershipSettings`<sup>Optional</sup> <a name="ownershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.ownershipSettings"></a>

```java
public SagemakerSpaceOwnershipSettings getOwnershipSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

ownership_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}

---

##### `spaceDisplayName`<sup>Optional</sup> <a name="spaceDisplayName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceDisplayName"></a>

```java
public java.lang.String getSpaceDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}.

---

##### `spaceSettings`<sup>Optional</sup> <a name="spaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSettings"></a>

```java
public SagemakerSpaceSpaceSettings getSpaceSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

space_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}

---

##### `spaceSharingSettings`<sup>Optional</sup> <a name="spaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.spaceSharingSettings"></a>

```java
public SagemakerSpaceSpaceSharingSettings getSpaceSharingSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

space_sharing_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}.

---

### SagemakerSpaceOwnershipSettings <a name="SagemakerSpaceOwnershipSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceOwnershipSettings;

SagemakerSpaceOwnershipSettings.builder()
    .ownerUserProfileName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName">ownerUserProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}. |

---

##### `ownerUserProfileName`<sup>Required</sup> <a name="ownerUserProfileName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings.property.ownerUserProfileName"></a>

```java
public java.lang.String getOwnerUserProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}.

---

### SagemakerSpaceSpaceSettings <a name="SagemakerSpaceSpaceSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettings;

SagemakerSpaceSpaceSettings.builder()
//  .appType(java.lang.String)
//  .codeEditorAppSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettings)
//  .customFileSystem(IResolvable)
//  .customFileSystem(java.util.List<SagemakerSpaceSpaceSettingsCustomFileSystem>)
//  .jupyterLabAppSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettings)
//  .jupyterServerAppSettings(SagemakerSpaceSpaceSettingsJupyterServerAppSettings)
//  .kernelGatewayAppSettings(SagemakerSpaceSpaceSettingsKernelGatewayAppSettings)
//  .spaceStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType">appType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | code_editor_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystem">customFileSystem</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>></code> | custom_file_system block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | jupyter_lab_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | space_storage_settings block. |

---

##### `appType`<sup>Optional</sup> <a name="appType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}.

---

##### `codeEditorAppSettings`<sup>Optional</sup> <a name="codeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.codeEditorAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettings getCodeEditorAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

code_editor_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#code_editor_app_settings SagemakerSpace#code_editor_app_settings}

---

##### `customFileSystem`<sup>Optional</sup> <a name="customFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.customFileSystem"></a>

```java
public java.lang.Object getCustomFileSystem();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>>

custom_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#custom_file_system SagemakerSpace#custom_file_system}

---

##### `jupyterLabAppSettings`<sup>Optional</sup> <a name="jupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterLabAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettings getJupyterLabAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

jupyter_lab_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#jupyter_lab_app_settings SagemakerSpace#jupyter_lab_app_settings}

---

##### `jupyterServerAppSettings`<sup>Optional</sup> <a name="jupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.jupyterServerAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettings getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#jupyter_server_app_settings SagemakerSpace#jupyter_server_app_settings}

---

##### `kernelGatewayAppSettings`<sup>Optional</sup> <a name="kernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.kernelGatewayAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettings getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#kernel_gateway_app_settings SagemakerSpace#kernel_gateway_app_settings}

---

##### `spaceStorageSettings`<sup>Optional</sup> <a name="spaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings.property.spaceStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettings getSpaceStorageSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

space_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#space_storage_settings SagemakerSpace#space_storage_settings}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettings <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettings;

SagemakerSpaceSpaceSettingsCodeEditorAppSettings.builder()
    .defaultResourceSpec(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec)
//  .appLifecycleManagement(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | app_lifecycle_management block. |

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

app_lifecycle_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;

SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.builder()
//  .idleSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | idle_settings block. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getIdleSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

idle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;

SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.builder()
//  .idleTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}.

---

### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionAlias(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `sagemakerImageVersionAlias`<sup>Optional</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsCustomFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystem;

SagemakerSpaceSpaceSettingsCustomFileSystem.builder()
    .efsFileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem.property.efsFileSystem">efsFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a></code> | efs_file_system block. |

---

##### `efsFileSystem`<sup>Required</sup> <a name="efsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem.property.efsFileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem getEfsFileSystem();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

efs_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}

---

### SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem <a name="SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem;

SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem.builder()
    .fileSystemId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}. |

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettings;

SagemakerSpaceSpaceSettingsJupyterLabAppSettings.builder()
    .defaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec)
//  .appLifecycleManagement(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement)
//  .codeRepository(IResolvable)
//  .codeRepository(java.util.List<SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | app_lifecycle_management block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepository">codeRepository</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>></code> | code_repository block. |

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

app_lifecycle_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}

---

##### `codeRepository`<sup>Optional</sup> <a name="codeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings.property.codeRepository"></a>

```java
public java.lang.Object getCodeRepository();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>>

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.builder()
//  .idleSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | idle_settings block. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getIdleSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

idle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.builder()
//  .idleTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository.builder()
    .repositoryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}. |

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}.

---

### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionAlias(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `sagemakerImageVersionAlias`<sup>Optional</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettings <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettings;

SagemakerSpaceSpaceSettingsJupyterServerAppSettings.builder()
    .defaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec)
//  .codeRepository(IResolvable)
//  .codeRepository(java.util.List<SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository>)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.codeRepository">codeRepository</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>></code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}. |

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `codeRepository`<sup>Optional</sup> <a name="codeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.codeRepository"></a>

```java
public java.lang.Object getCodeRepository();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>>

code_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}.

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository;

SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository.builder()
    .repositoryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}. |

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}.

---

### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionAlias(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `sagemakerImageVersionAlias`<sup>Optional</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettings <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings;

SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.builder()
    .defaultResourceSpec(SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec)
//  .customImage(IResolvable)
//  .customImage(java.util.List<SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage>)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImage">customImage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>></code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}. |

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}

---

##### `customImage`<sup>Optional</sup> <a name="customImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.customImage"></a>

```java
public java.lang.Object getCustomImage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>>

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#custom_image SagemakerSpace#custom_image}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}.

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage;

SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.builder()
    .appImageConfigName(java.lang.String)
    .imageName(java.lang.String)
//  .imageVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}. |

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}.

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}.

---

### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;

SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionAlias(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}.

---

##### `sagemakerImageVersionAlias`<sup>Optional</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}.

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettings;

SagemakerSpaceSpaceSettingsSpaceStorageSettings.builder()
    .ebsStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings">ebsStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | ebs_storage_settings block. |

---

##### `ebsStorageSettings`<sup>Required</sup> <a name="ebsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings.property.ebsStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings getEbsStorageSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

ebs_storage_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#ebs_storage_settings SagemakerSpace#ebs_storage_settings}

---

### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;

SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.builder()
    .ebsVolumeSizeInGb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb">ebsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}. |

---

##### `ebsVolumeSizeInGb`<sup>Required</sup> <a name="ebsVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings.property.ebsVolumeSizeInGb"></a>

```java
public java.lang.Number getEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}.

---

### SagemakerSpaceSpaceSharingSettings <a name="SagemakerSpaceSpaceSharingSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSharingSettings;

SagemakerSpaceSpaceSharingSettings.builder()
    .sharingType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType">sharingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}. |

---

##### `sharingType`<sup>Required</sup> <a name="sharingType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings.property.sharingType"></a>

```java
public java.lang.String getSharingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerSpaceOwnershipSettingsOutputReference <a name="SagemakerSpaceOwnershipSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceOwnershipSettingsOutputReference;

new SagemakerSpaceOwnershipSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput">ownerUserProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName">ownerUserProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerUserProfileNameInput`<sup>Optional</sup> <a name="ownerUserProfileNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileNameInput"></a>

```java
public java.lang.String getOwnerUserProfileNameInput();
```

- *Type:* java.lang.String

---

##### `ownerUserProfileName`<sup>Required</sup> <a name="ownerUserProfileName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.ownerUserProfileName"></a>

```java
public java.lang.String getOwnerUserProfileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceOwnershipSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceOwnershipSettings">SagemakerSpaceOwnershipSettings</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```java
public void putIdleSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```java
public void resetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings getIdleSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">resetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionAlias` <a name="resetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```java
public void resetSagemakerImageVersionAlias()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemakerImageVersionAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="sagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```java
public java.lang.String getSagemakerImageVersionAliasInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAlias`<sup>Required</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement"></a>

```java
public void putAppLifecycleManagement(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```java
public void resetAppLifecycleManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement getAppLifecycleManagementInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference;

new SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemList <a name="SagemakerSpaceSpaceSettingsCustomFileSystemList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemList;

new SagemakerSpaceSpaceSettingsCustomFileSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.get"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>>

---


### SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference <a name="SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference;

new SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.putEfsFileSystem">putEfsFileSystem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileSystem` <a name="putEfsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.putEfsFileSystem"></a>

```java
public void putEfsFileSystem(SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.putEfsFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystem">efsFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystemInput">efsFileSystemInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `efsFileSystem`<sup>Required</sup> <a name="efsFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference getEfsFileSystem();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference</a>

---

##### `efsFileSystemInput`<sup>Optional</sup> <a name="efsFileSystemInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.efsFileSystemInput"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem getEfsFileSystemInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```java
public void putIdleSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```java
public void resetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference getIdleSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings getIdleSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.get"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">resetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionAlias` <a name="resetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```java
public void resetSagemakerImageVersionAlias()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemakerImageVersionAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="sagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```java
public java.lang.String getSagemakerImageVersionAliasInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAlias`<sup>Required</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepository">putCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepository">resetCodeRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement"></a>

```java
public void putAppLifecycleManagement(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `putCodeRepository` <a name="putCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepository"></a>

```java
public void putCodeRepository(IResolvable OR java.util.List<SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```java
public void resetAppLifecycleManagement()
```

##### `resetCodeRepository` <a name="resetCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.resetCodeRepository"></a>

```java
public void resetCodeRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepository">codeRepository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoryInput">codeRepositoryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference getAppLifecycleManagement();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `codeRepository`<sup>Required</sup> <a name="codeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepository"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList getCodeRepository();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement getAppLifecycleManagementInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `codeRepositoryInput`<sup>Optional</sup> <a name="codeRepositoryInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoryInput"></a>

```java
public java.lang.Object getCodeRepositoryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">resetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionAlias` <a name="resetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```java
public void resetSagemakerImageVersionAlias()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemakerImageVersionAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="sagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```java
public java.lang.String getSagemakerImageVersionAliasInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAlias`<sup>Required</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">putCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">resetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeRepository` <a name="putCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```java
public void putCodeRepository(IResolvable OR java.util.List<SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `resetCodeRepository` <a name="resetCodeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```java
public void resetCodeRepository()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">codeRepository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">codeRepositoryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeRepository`<sup>Required</sup> <a name="codeRepository" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList getCodeRepository();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `codeRepositoryInput`<sup>Optional</sup> <a name="codeRepositoryInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```java
public java.lang.Object getCodeRepositoryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```java
public void resetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```java
public java.lang.Number getImageVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias">resetSagemakerImageVersionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionAlias` <a name="resetSagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionAlias"></a>

```java
public void resetSagemakerImageVersionAlias()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput">sagemakerImageVersionAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias">sagemakerImageVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAliasInput`<sup>Optional</sup> <a name="sagemakerImageVersionAliasInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAliasInput"></a>

```java
public java.lang.String getSagemakerImageVersionAliasInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionAlias`<sup>Required</sup> <a name="sagemakerImageVersionAlias" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionAlias"></a>

```java
public java.lang.String getSagemakerImageVersionAlias();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference;

new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">putCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">resetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImage` <a name="putCustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```java
public void putCustomImage(IResolvable OR java.util.List<SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `resetCustomImage` <a name="resetCustomImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```java
public void resetCustomImage()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage">customImage</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">customImageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customImage`<sup>Required</sup> <a name="customImage" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList getCustomImage();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `customImageInput`<sup>Optional</sup> <a name="customImageInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```java
public java.lang.Object getCustomImageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---


### SagemakerSpaceSpaceSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsOutputReference;

new SagemakerSpaceSpaceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings">putCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystem">putCustomFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings">putJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings">putJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings">putKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings">putSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType">resetAppType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings">resetCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystem">resetCustomFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings">resetJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings">resetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings">resetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings">resetSpaceStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeEditorAppSettings` <a name="putCodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings"></a>

```java
public void putCodeEditorAppSettings(SagemakerSpaceSpaceSettingsCodeEditorAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCodeEditorAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `putCustomFileSystem` <a name="putCustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystem"></a>

```java
public void putCustomFileSystem(IResolvable OR java.util.List<SagemakerSpaceSpaceSettingsCustomFileSystem> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putCustomFileSystem.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>>

---

##### `putJupyterLabAppSettings` <a name="putJupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings"></a>

```java
public void putJupyterLabAppSettings(SagemakerSpaceSpaceSettingsJupyterLabAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterLabAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `putJupyterServerAppSettings` <a name="putJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings"></a>

```java
public void putJupyterServerAppSettings(SagemakerSpaceSpaceSettingsJupyterServerAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `putKernelGatewayAppSettings` <a name="putKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings"></a>

```java
public void putKernelGatewayAppSettings(SagemakerSpaceSpaceSettingsKernelGatewayAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `putSpaceStorageSettings` <a name="putSpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings"></a>

```java
public void putSpaceStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.putSpaceStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `resetAppType` <a name="resetAppType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetAppType"></a>

```java
public void resetAppType()
```

##### `resetCodeEditorAppSettings` <a name="resetCodeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCodeEditorAppSettings"></a>

```java
public void resetCodeEditorAppSettings()
```

##### `resetCustomFileSystem` <a name="resetCustomFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetCustomFileSystem"></a>

```java
public void resetCustomFileSystem()
```

##### `resetJupyterLabAppSettings` <a name="resetJupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterLabAppSettings"></a>

```java
public void resetJupyterLabAppSettings()
```

##### `resetJupyterServerAppSettings` <a name="resetJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetJupyterServerAppSettings"></a>

```java
public void resetJupyterServerAppSettings()
```

##### `resetKernelGatewayAppSettings` <a name="resetKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```java
public void resetKernelGatewayAppSettings()
```

##### `resetSpaceStorageSettings` <a name="resetSpaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.resetSpaceStorageSettings"></a>

```java
public void resetSpaceStorageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystem">customFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList">SagemakerSpaceSpaceSettingsCustomFileSystemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput">appTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput">codeEditorAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemInput">customFileSystemInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput">jupyterLabAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyterServerAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernelGatewayAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput">spaceStorageSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType">appType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeEditorAppSettings`<sup>Required</sup> <a name="codeEditorAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference getCodeEditorAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference">SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `customFileSystem`<sup>Required</sup> <a name="customFileSystem" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystem"></a>

```java
public SagemakerSpaceSpaceSettingsCustomFileSystemList getCustomFileSystem();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystemList">SagemakerSpaceSpaceSettingsCustomFileSystemList</a>

---

##### `jupyterLabAppSettings`<sup>Required</sup> <a name="jupyterLabAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference getJupyterLabAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `spaceStorageSettings`<sup>Required</sup> <a name="spaceStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference getSpaceStorageSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference</a>

---

##### `appTypeInput`<sup>Optional</sup> <a name="appTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appTypeInput"></a>

```java
public java.lang.String getAppTypeInput();
```

- *Type:* java.lang.String

---

##### `codeEditorAppSettingsInput`<sup>Optional</sup> <a name="codeEditorAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsCodeEditorAppSettings getCodeEditorAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCodeEditorAppSettings">SagemakerSpaceSpaceSettingsCodeEditorAppSettings</a>

---

##### `customFileSystemInput`<sup>Optional</sup> <a name="customFileSystemInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.customFileSystemInput"></a>

```java
public java.lang.Object getCustomFileSystemInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsCustomFileSystem">SagemakerSpaceSpaceSettingsCustomFileSystem</a>>

---

##### `jupyterLabAppSettingsInput`<sup>Optional</sup> <a name="jupyterLabAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterLabAppSettings getJupyterLabAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterLabAppSettings">SagemakerSpaceSpaceSettingsJupyterLabAppSettings</a>

---

##### `jupyterServerAppSettingsInput`<sup>Optional</sup> <a name="jupyterServerAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsJupyterServerAppSettings getJupyterServerAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsJupyterServerAppSettings">SagemakerSpaceSpaceSettingsJupyterServerAppSettings</a>

---

##### `kernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="kernelGatewayAppSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsKernelGatewayAppSettings getKernelGatewayAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsKernelGatewayAppSettings">SagemakerSpaceSpaceSettingsKernelGatewayAppSettings</a>

---

##### `spaceStorageSettingsInput`<sup>Optional</sup> <a name="spaceStorageSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettings getSpaceStorageSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---

##### `appType`<sup>Required</sup> <a name="appType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettings">SagemakerSpaceSpaceSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference;

new SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput">ebsVolumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb">ebsVolumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsVolumeSizeInGbInput`<sup>Optional</sup> <a name="ebsVolumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGbInput"></a>

```java
public java.lang.Number getEbsVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeSizeInGb`<sup>Required</sup> <a name="ebsVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.ebsVolumeSizeInGb"></a>

```java
public java.lang.Number getEbsVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---


### SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference <a name="SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference;

new SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings">putEbsStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsStorageSettings` <a name="putEbsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings"></a>

```java
public void putEbsStorageSettings(SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.putEbsStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings">ebsStorageSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput">ebsStorageSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsStorageSettings`<sup>Required</sup> <a name="ebsStorageSettings" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettings"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference getEbsStorageSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference</a>

---

##### `ebsStorageSettingsInput`<sup>Optional</sup> <a name="ebsStorageSettingsInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.ebsStorageSettingsInput"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings getEbsStorageSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSettingsSpaceStorageSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSettingsSpaceStorageSettings">SagemakerSpaceSpaceSettingsSpaceStorageSettings</a>

---


### SagemakerSpaceSpaceSharingSettingsOutputReference <a name="SagemakerSpaceSpaceSharingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_space.SagemakerSpaceSpaceSharingSettingsOutputReference;

new SagemakerSpaceSpaceSharingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput">sharingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType">sharingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sharingTypeInput`<sup>Optional</sup> <a name="sharingTypeInput" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingTypeInput"></a>

```java
public java.lang.String getSharingTypeInput();
```

- *Type:* java.lang.String

---

##### `sharingType`<sup>Required</sup> <a name="sharingType" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.sharingType"></a>

```java
public java.lang.String getSharingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerSpaceSpaceSharingSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerSpace.SagemakerSpaceSpaceSharingSettings">SagemakerSpaceSpaceSharingSettings</a>

---



