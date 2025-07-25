# `cognitoIdentityPoolRolesAttachment` Submodule <a name="`cognitoIdentityPoolRolesAttachment` Submodule" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolRolesAttachment <a name="CognitoIdentityPoolRolesAttachment" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment aws_cognito_identity_pool_roles_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachment;

CognitoIdentityPoolRolesAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .identityPoolId(java.lang.String)
    .roles(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .roleMapping(IResolvable)
//  .roleMapping(java.util.List<CognitoIdentityPoolRolesAttachmentRoleMapping>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.roles">roles</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#roles CognitoIdentityPoolRolesAttachment#roles}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#id CognitoIdentityPoolRolesAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.roleMapping">roleMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>></code> | role_mapping block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.identityPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.roles"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#roles CognitoIdentityPoolRolesAttachment#roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#id CognitoIdentityPoolRolesAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#region CognitoIdentityPoolRolesAttachment#region}

---

##### `roleMapping`<sup>Optional</sup> <a name="roleMapping" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.Initializer.parameter.roleMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>>

role_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#role_mapping CognitoIdentityPoolRolesAttachment#role_mapping}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.putRoleMapping">putRoleMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetRoleMapping">resetRoleMapping</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoleMapping` <a name="putRoleMapping" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.putRoleMapping"></a>

```java
public void putRoleMapping(IResolvable OR java.util.List<CognitoIdentityPoolRolesAttachmentRoleMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.putRoleMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleMapping` <a name="resetRoleMapping" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.resetRoleMapping"></a>

```java
public void resetRoleMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoIdentityPoolRolesAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachment;

CognitoIdentityPoolRolesAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachment;

CognitoIdentityPoolRolesAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachment;

CognitoIdentityPoolRolesAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachment;

CognitoIdentityPoolRolesAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoIdentityPoolRolesAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CognitoIdentityPoolRolesAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoIdentityPoolRolesAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoIdentityPoolRolesAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolRolesAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.roleMapping">roleMapping</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList">CognitoIdentityPoolRolesAttachmentRoleMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.roleMappingInput">roleMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.rolesInput">rolesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.roles">roles</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleMapping`<sup>Required</sup> <a name="roleMapping" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.roleMapping"></a>

```java
public CognitoIdentityPoolRolesAttachmentRoleMappingList getRoleMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList">CognitoIdentityPoolRolesAttachmentRoleMappingList</a>

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleMappingInput`<sup>Optional</sup> <a name="roleMappingInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.roleMappingInput"></a>

```java
public java.lang.Object getRoleMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.rolesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRolesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.roles"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRoles();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolRolesAttachmentConfig <a name="CognitoIdentityPoolRolesAttachmentConfig" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachmentConfig;

CognitoIdentityPoolRolesAttachmentConfig.builder()
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
    .identityPoolId(java.lang.String)
    .roles(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .roleMapping(IResolvable)
//  .roleMapping(java.util.List<CognitoIdentityPoolRolesAttachmentRoleMapping>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.roles">roles</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#roles CognitoIdentityPoolRolesAttachment#roles}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#id CognitoIdentityPoolRolesAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.roleMapping">roleMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>></code> | role_mapping block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.roles"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRoles();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#roles CognitoIdentityPoolRolesAttachment#roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#id CognitoIdentityPoolRolesAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#region CognitoIdentityPoolRolesAttachment#region}

---

##### `roleMapping`<sup>Optional</sup> <a name="roleMapping" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentConfig.property.roleMapping"></a>

```java
public java.lang.Object getRoleMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>>

role_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#role_mapping CognitoIdentityPoolRolesAttachment#role_mapping}

---

### CognitoIdentityPoolRolesAttachmentRoleMapping <a name="CognitoIdentityPoolRolesAttachmentRoleMapping" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachmentRoleMapping;

CognitoIdentityPoolRolesAttachmentRoleMapping.builder()
    .identityProvider(java.lang.String)
    .type(java.lang.String)
//  .ambiguousRoleResolution(java.lang.String)
//  .mappingRule(IResolvable)
//  .mappingRule(java.util.List<CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#identity_provider CognitoIdentityPoolRolesAttachment#identity_provider}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#type CognitoIdentityPoolRolesAttachment#type}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.ambiguousRoleResolution">ambiguousRoleResolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#ambiguous_role_resolution CognitoIdentityPoolRolesAttachment#ambiguous_role_resolution}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.mappingRule">mappingRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>></code> | mapping_rule block. |

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#identity_provider CognitoIdentityPoolRolesAttachment#identity_provider}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#type CognitoIdentityPoolRolesAttachment#type}.

---

##### `ambiguousRoleResolution`<sup>Optional</sup> <a name="ambiguousRoleResolution" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.ambiguousRoleResolution"></a>

```java
public java.lang.String getAmbiguousRoleResolution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#ambiguous_role_resolution CognitoIdentityPoolRolesAttachment#ambiguous_role_resolution}.

---

##### `mappingRule`<sup>Optional</sup> <a name="mappingRule" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping.property.mappingRule"></a>

```java
public java.lang.Object getMappingRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>>

mapping_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#mapping_rule CognitoIdentityPoolRolesAttachment#mapping_rule}

---

### CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule <a name="CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule;

CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.builder()
    .claim(java.lang.String)
    .matchType(java.lang.String)
    .roleArn(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.claim">claim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#claim CognitoIdentityPoolRolesAttachment#claim}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#match_type CognitoIdentityPoolRolesAttachment#match_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#role_arn CognitoIdentityPoolRolesAttachment#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#value CognitoIdentityPoolRolesAttachment#value}. |

---

##### `claim`<sup>Required</sup> <a name="claim" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.claim"></a>

```java
public java.lang.String getClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#claim CognitoIdentityPoolRolesAttachment#claim}.

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#match_type CognitoIdentityPoolRolesAttachment#match_type}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#role_arn CognitoIdentityPoolRolesAttachment#role_arn}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/cognito_identity_pool_roles_attachment#value CognitoIdentityPoolRolesAttachment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolRolesAttachmentRoleMappingList <a name="CognitoIdentityPoolRolesAttachmentRoleMappingList" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachmentRoleMappingList;

new CognitoIdentityPoolRolesAttachmentRoleMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.get"></a>

```java
public CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>>

---


### CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList <a name="CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList;

new CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.get"></a>

```java
public CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>>

---


### CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference <a name="CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference;

new CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.claimInput">claimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.claim">claim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimInput`<sup>Optional</sup> <a name="claimInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.claimInput"></a>

```java
public java.lang.String getClaimInput();
```

- *Type:* java.lang.String

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `claim`<sup>Required</sup> <a name="claim" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.claim"></a>

```java
public java.lang.String getClaim();
```

- *Type:* java.lang.String

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>

---


### CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference <a name="CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_roles_attachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference;

new CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.putMappingRule">putMappingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.resetAmbiguousRoleResolution">resetAmbiguousRoleResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.resetMappingRule">resetMappingRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMappingRule` <a name="putMappingRule" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.putMappingRule"></a>

```java
public void putMappingRule(IResolvable OR java.util.List<CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.putMappingRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>>

---

##### `resetAmbiguousRoleResolution` <a name="resetAmbiguousRoleResolution" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.resetAmbiguousRoleResolution"></a>

```java
public void resetAmbiguousRoleResolution()
```

##### `resetMappingRule` <a name="resetMappingRule" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.resetMappingRule"></a>

```java
public void resetMappingRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.mappingRule">mappingRule</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.ambiguousRoleResolutionInput">ambiguousRoleResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.identityProviderInput">identityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.mappingRuleInput">mappingRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.ambiguousRoleResolution">ambiguousRoleResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mappingRule`<sup>Required</sup> <a name="mappingRule" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.mappingRule"></a>

```java
public CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList getMappingRule();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList</a>

---

##### `ambiguousRoleResolutionInput`<sup>Optional</sup> <a name="ambiguousRoleResolutionInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.ambiguousRoleResolutionInput"></a>

```java
public java.lang.String getAmbiguousRoleResolutionInput();
```

- *Type:* java.lang.String

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.identityProviderInput"></a>

```java
public java.lang.String getIdentityProviderInput();
```

- *Type:* java.lang.String

---

##### `mappingRuleInput`<sup>Optional</sup> <a name="mappingRuleInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.mappingRuleInput"></a>

```java
public java.lang.Object getMappingRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule">CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `ambiguousRoleResolution`<sup>Required</sup> <a name="ambiguousRoleResolution" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.ambiguousRoleResolution"></a>

```java
public java.lang.String getAmbiguousRoleResolution();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoIdentityPoolRolesAttachment.CognitoIdentityPoolRolesAttachmentRoleMapping">CognitoIdentityPoolRolesAttachmentRoleMapping</a>

---



