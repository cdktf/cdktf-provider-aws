# `s3ControlAccessGrant` Submodule <a name="`s3ControlAccessGrant` Submodule" id="@cdktf/provider-aws.s3ControlAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlAccessGrant <a name="S3ControlAccessGrant" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant aws_s3control_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrant;

S3ControlAccessGrant.Builder.create(Construct scope, java.lang.String id)
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
    .accessGrantsLocationId(java.lang.String)
    .permission(java.lang.String)
//  .accessGrantsLocationConfiguration(IResolvable)
//  .accessGrantsLocationConfiguration(java.util.List<S3ControlAccessGrantAccessGrantsLocationConfiguration>)
//  .accountId(java.lang.String)
//  .grantee(IResolvable)
//  .grantee(java.util.List<S3ControlAccessGrantGrantee>)
//  .s3PrefixType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationId">accessGrantsLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationConfiguration">accessGrantsLocationConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>></code> | access_grants_location_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.grantee">grantee</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>></code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.s3PrefixType">s3PrefixType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessGrantsLocationId`<sup>Required</sup> <a name="accessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.permission"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}.

---

##### `accessGrantsLocationConfiguration`<sup>Optional</sup> <a name="accessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>>

access_grants_location_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.grantee"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>>

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}

---

##### `s3PrefixType`<sup>Optional</sup> <a name="s3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.s3PrefixType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration">putAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee">putGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration">resetAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee">resetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType">resetS3PrefixType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessGrantsLocationConfiguration` <a name="putAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration"></a>

```java
public void putAccessGrantsLocationConfiguration(IResolvable OR java.util.List<S3ControlAccessGrantAccessGrantsLocationConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>>

---

##### `putGrantee` <a name="putGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee"></a>

```java
public void putGrantee(IResolvable OR java.util.List<S3ControlAccessGrantGrantee> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>>

---

##### `resetAccessGrantsLocationConfiguration` <a name="resetAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration"></a>

```java
public void resetAccessGrantsLocationConfiguration()
```

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetGrantee` <a name="resetGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee"></a>

```java
public void resetGrantee()
```

##### `resetS3PrefixType` <a name="resetS3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType"></a>

```java
public void resetS3PrefixType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrant;

S3ControlAccessGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrant;

S3ControlAccessGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrant;

S3ControlAccessGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrant;

S3ControlAccessGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3ControlAccessGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3ControlAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3ControlAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn">accessGrantArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId">accessGrantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration">accessGrantsLocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope">grantScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput">accessGrantsLocationConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput">accessGrantsLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput">granteeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput">s3PrefixTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId">accessGrantsLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType">s3PrefixType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessGrantArn`<sup>Required</sup> <a name="accessGrantArn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn"></a>

```java
public java.lang.String getAccessGrantArn();
```

- *Type:* java.lang.String

---

##### `accessGrantId`<sup>Required</sup> <a name="accessGrantId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId"></a>

```java
public java.lang.String getAccessGrantId();
```

- *Type:* java.lang.String

---

##### `accessGrantsLocationConfiguration`<sup>Required</sup> <a name="accessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration"></a>

```java
public S3ControlAccessGrantAccessGrantsLocationConfigurationList getAccessGrantsLocationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a>

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee"></a>

```java
public S3ControlAccessGrantGranteeList getGrantee();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a>

---

##### `grantScope`<sup>Required</sup> <a name="grantScope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope"></a>

```java
public java.lang.String getGrantScope();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `accessGrantsLocationConfigurationInput`<sup>Optional</sup> <a name="accessGrantsLocationConfigurationInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput"></a>

```java
public java.lang.Object getAccessGrantsLocationConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>>

---

##### `accessGrantsLocationIdInput`<sup>Optional</sup> <a name="accessGrantsLocationIdInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput"></a>

```java
public java.lang.String getAccessGrantsLocationIdInput();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput"></a>

```java
public java.lang.Object getGranteeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `s3PrefixTypeInput`<sup>Optional</sup> <a name="s3PrefixTypeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput"></a>

```java
public java.lang.String getS3PrefixTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accessGrantsLocationId`<sup>Required</sup> <a name="accessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId"></a>

```java
public java.lang.String getAccessGrantsLocationId();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `s3PrefixType`<sup>Required</sup> <a name="s3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType"></a>

```java
public java.lang.String getS3PrefixType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlAccessGrantAccessGrantsLocationConfiguration <a name="S3ControlAccessGrantAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrantAccessGrantsLocationConfiguration;

S3ControlAccessGrantAccessGrantsLocationConfiguration.builder()
//  .s3SubPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix">s3SubPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}. |

---

##### `s3SubPrefix`<sup>Optional</sup> <a name="s3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix"></a>

```java
public java.lang.String getS3SubPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}.

---

### S3ControlAccessGrantConfig <a name="S3ControlAccessGrantConfig" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrantConfig;

S3ControlAccessGrantConfig.builder()
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
    .accessGrantsLocationId(java.lang.String)
    .permission(java.lang.String)
//  .accessGrantsLocationConfiguration(IResolvable)
//  .accessGrantsLocationConfiguration(java.util.List<S3ControlAccessGrantAccessGrantsLocationConfiguration>)
//  .accountId(java.lang.String)
//  .grantee(IResolvable)
//  .grantee(java.util.List<S3ControlAccessGrantGrantee>)
//  .s3PrefixType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId">accessGrantsLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration">accessGrantsLocationConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>></code> | access_grants_location_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee">grantee</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>></code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType">s3PrefixType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessGrantsLocationId`<sup>Required</sup> <a name="accessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId"></a>

```java
public java.lang.String getAccessGrantsLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}.

---

##### `accessGrantsLocationConfiguration`<sup>Optional</sup> <a name="accessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration"></a>

```java
public java.lang.Object getAccessGrantsLocationConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>>

access_grants_location_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee"></a>

```java
public java.lang.Object getGrantee();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>>

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}

---

##### `s3PrefixType`<sup>Optional</sup> <a name="s3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType"></a>

```java
public java.lang.String getS3PrefixType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}.

---

### S3ControlAccessGrantGrantee <a name="S3ControlAccessGrantGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrantGrantee;

S3ControlAccessGrantGrantee.builder()
    .granteeIdentifier(java.lang.String)
    .granteeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier">granteeIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType">granteeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}. |

---

##### `granteeIdentifier`<sup>Required</sup> <a name="granteeIdentifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier"></a>

```java
public java.lang.String getGranteeIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}.

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType"></a>

```java
public java.lang.String getGranteeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlAccessGrantAccessGrantsLocationConfigurationList <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrantAccessGrantsLocationConfigurationList;

new S3ControlAccessGrantAccessGrantsLocationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get"></a>

```java
public S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>>

---


### S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference;

new S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix">resetS3SubPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3SubPrefix` <a name="resetS3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix"></a>

```java
public void resetS3SubPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput">s3SubPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix">s3SubPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3SubPrefixInput`<sup>Optional</sup> <a name="s3SubPrefixInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput"></a>

```java
public java.lang.String getS3SubPrefixInput();
```

- *Type:* java.lang.String

---

##### `s3SubPrefix`<sup>Required</sup> <a name="s3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix"></a>

```java
public java.lang.String getS3SubPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>

---


### S3ControlAccessGrantGranteeList <a name="S3ControlAccessGrantGranteeList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrantGranteeList;

new S3ControlAccessGrantGranteeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get"></a>

```java
public S3ControlAccessGrantGranteeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>>

---


### S3ControlAccessGrantGranteeOutputReference <a name="S3ControlAccessGrantGranteeOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_access_grant.S3ControlAccessGrantGranteeOutputReference;

new S3ControlAccessGrantGranteeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput">granteeIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput">granteeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier">granteeIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType">granteeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granteeIdentifierInput`<sup>Optional</sup> <a name="granteeIdentifierInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput"></a>

```java
public java.lang.String getGranteeIdentifierInput();
```

- *Type:* java.lang.String

---

##### `granteeTypeInput`<sup>Optional</sup> <a name="granteeTypeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput"></a>

```java
public java.lang.String getGranteeTypeInput();
```

- *Type:* java.lang.String

---

##### `granteeIdentifier`<sup>Required</sup> <a name="granteeIdentifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier"></a>

```java
public java.lang.String getGranteeIdentifier();
```

- *Type:* java.lang.String

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType"></a>

```java
public java.lang.String getGranteeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>

---



