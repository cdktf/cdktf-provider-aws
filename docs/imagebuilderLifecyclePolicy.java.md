# `imagebuilderLifecyclePolicy` Submodule <a name="`imagebuilderLifecyclePolicy` Submodule" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderLifecyclePolicy <a name="ImagebuilderLifecyclePolicy" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy aws_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.Builder.create(Construct scope, java.lang.String id)
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
    .executionRole(java.lang.String)
    .name(java.lang.String)
    .resourceType(java.lang.String)
//  .description(java.lang.String)
//  .policyDetail(IResolvable)
//  .policyDetail(java.util.List<ImagebuilderLifecyclePolicyPolicyDetail>)
//  .resourceSelection(IResolvable)
//  .resourceSelection(java.util.List<ImagebuilderLifecyclePolicyResourceSelection>)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.policyDetail">policyDetail</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>></code> | policy_detail block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceSelection">resourceSelection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>></code> | resource_selection block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.executionRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}.

---

##### `policyDetail`<sup>Optional</sup> <a name="policyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.policyDetail"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>>

policy_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#policy_detail ImagebuilderLifecyclePolicy#policy_detail}

---

##### `resourceSelection`<sup>Optional</sup> <a name="resourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceSelection"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>>

resource_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetail">putPolicyDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection">putResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetPolicyDetail">resetPolicyDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetResourceSelection">resetResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyDetail` <a name="putPolicyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetail"></a>

```java
public void putPolicyDetail(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyPolicyDetail> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetail.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>>

---

##### `putResourceSelection` <a name="putResourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection"></a>

```java
public void putResourceSelection(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyResourceSelection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPolicyDetail` <a name="resetPolicyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetPolicyDetail"></a>

```java
public void resetPolicyDetail()
```

##### `resetResourceSelection` <a name="resetResourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetResourceSelection"></a>

```java
public void resetResourceSelection()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicy;

ImagebuilderLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ImagebuilderLifecyclePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetail">policyDetail</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList">ImagebuilderLifecyclePolicyPolicyDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList">ImagebuilderLifecyclePolicyResourceSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailInput">policyDetailInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput">resourceSelectionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyDetail`<sup>Required</sup> <a name="policyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetail"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailList getPolicyDetail();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList">ImagebuilderLifecyclePolicyPolicyDetailList</a>

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelectionList getResourceSelection();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList">ImagebuilderLifecyclePolicyResourceSelectionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyDetailInput`<sup>Optional</sup> <a name="policyDetailInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailInput"></a>

```java
public java.lang.Object getPolicyDetailInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>>

---

##### `resourceSelectionInput`<sup>Optional</sup> <a name="resourceSelectionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput"></a>

```java
public java.lang.Object getResourceSelectionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderLifecyclePolicyConfig <a name="ImagebuilderLifecyclePolicyConfig" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyConfig;

ImagebuilderLifecyclePolicyConfig.builder()
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
    .executionRole(java.lang.String)
    .name(java.lang.String)
    .resourceType(java.lang.String)
//  .description(java.lang.String)
//  .policyDetail(IResolvable)
//  .policyDetail(java.util.List<ImagebuilderLifecyclePolicyPolicyDetail>)
//  .resourceSelection(IResolvable)
//  .resourceSelection(java.util.List<ImagebuilderLifecyclePolicyResourceSelection>)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetail">policyDetail</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>></code> | policy_detail block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection">resourceSelection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>></code> | resource_selection block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}.

---

##### `policyDetail`<sup>Optional</sup> <a name="policyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetail"></a>

```java
public java.lang.Object getPolicyDetail();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>>

policy_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#policy_detail ImagebuilderLifecyclePolicy#policy_detail}

---

##### `resourceSelection`<sup>Optional</sup> <a name="resourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection"></a>

```java
public java.lang.Object getResourceSelection();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>>

resource_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}.

---

### ImagebuilderLifecyclePolicyPolicyDetail <a name="ImagebuilderLifecyclePolicyPolicyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetail;

ImagebuilderLifecyclePolicyPolicyDetail.builder()
//  .action(IResolvable)
//  .action(java.util.List<ImagebuilderLifecyclePolicyPolicyDetailAction>)
//  .exclusionRules(IResolvable)
//  .exclusionRules(java.util.List<ImagebuilderLifecyclePolicyPolicyDetailExclusionRules>)
//  .filter(IResolvable)
//  .filter(java.util.List<ImagebuilderLifecyclePolicyPolicyDetailFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.exclusionRules">exclusionRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>></code> | exclusion_rules block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>></code> | filter block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}

---

##### `exclusionRules`<sup>Optional</sup> <a name="exclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.exclusionRules"></a>

```java
public java.lang.Object getExclusionRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>>

exclusion_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}

---

### ImagebuilderLifecyclePolicyPolicyDetailAction <a name="ImagebuilderLifecyclePolicyPolicyDetailAction" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailAction;

ImagebuilderLifecyclePolicyPolicyDetailAction.builder()
    .type(java.lang.String)
//  .includeResources(IResolvable)
//  .includeResources(java.util.List<ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.includeResources">includeResources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>></code> | include_resources block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}.

---

##### `includeResources`<sup>Optional</sup> <a name="includeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.includeResources"></a>

```java
public java.lang.Object getIncludeResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>>

include_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

### ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources <a name="ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources;

ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.builder()
//  .amis(java.lang.Boolean)
//  .amis(IResolvable)
//  .containers(java.lang.Boolean)
//  .containers(IResolvable)
//  .snapshots(java.lang.Boolean)
//  .snapshots(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.amis">amis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.containers">containers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.snapshots">snapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.amis"></a>

```java
public java.lang.Object getAmis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}.

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.containers"></a>

```java
public java.lang.Object getContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}.

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.snapshots"></a>

```java
public java.lang.Object getSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}.

---

### ImagebuilderLifecyclePolicyPolicyDetailExclusionRules <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules;

ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.builder()
//  .amis(IResolvable)
//  .amis(java.util.List<ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis>)
//  .tagMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.amis">amis</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>></code> | amis block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.amis"></a>

```java
public java.lang.Object getAmis();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>>

amis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}.

---

### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis;

ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.builder()
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .lastLaunched(IResolvable)
//  .lastLaunched(java.util.List<ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched>)
//  .regions(java.util.List<java.lang.String>)
//  .sharedAccounts(java.util.List<java.lang.String>)
//  .tagMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.lastLaunched">lastLaunched</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>></code> | last_launched block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}. |

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}.

---

##### `lastLaunched`<sup>Optional</sup> <a name="lastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.lastLaunched"></a>

```java
public java.lang.Object getLastLaunched();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>>

last_launched block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}.

---

##### `sharedAccounts`<sup>Optional</sup> <a name="sharedAccounts" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.sharedAccounts"></a>

```java
public java.util.List<java.lang.String> getSharedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}.

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}.

---

### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched;

ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}.

---

### ImagebuilderLifecyclePolicyPolicyDetailFilter <a name="ImagebuilderLifecyclePolicyPolicyDetailFilter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailFilter;

ImagebuilderLifecyclePolicyPolicyDetailFilter.builder()
    .type(java.lang.String)
    .value(java.lang.Number)
//  .retainAtLeast(java.lang.Number)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.retainAtLeast">retainAtLeast</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}.

---

##### `retainAtLeast`<sup>Optional</sup> <a name="retainAtLeast" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.retainAtLeast"></a>

```java
public java.lang.Number getRetainAtLeast();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}.

---

### ImagebuilderLifecyclePolicyResourceSelection <a name="ImagebuilderLifecyclePolicyResourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelection;

ImagebuilderLifecyclePolicyResourceSelection.builder()
//  .recipe(IResolvable)
//  .recipe(java.util.List<ImagebuilderLifecyclePolicyResourceSelectionRecipe>)
//  .tagMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipe">recipe</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>></code> | recipe block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}. |

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipe"></a>

```java
public java.lang.Object getRecipe();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>>

recipe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#recipe ImagebuilderLifecyclePolicy#recipe}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}.

---

### ImagebuilderLifecyclePolicyResourceSelectionRecipe <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionRecipe;

ImagebuilderLifecyclePolicyResourceSelectionRecipe.builder()
    .name(java.lang.String)
    .semanticVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}.

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList <a name="ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList;

new ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetSnapshots">resetSnapshots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmis` <a name="resetAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetAmis"></a>

```java
public void resetAmis()
```

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetContainers"></a>

```java
public void resetContainers()
```

##### `resetSnapshots` <a name="resetSnapshots" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetSnapshots"></a>

```java
public void resetSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amisInput">amisInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containersInput">containersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshotsInput">snapshotsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amis">amis</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containers">containers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshots">snapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amisInput"></a>

```java
public java.lang.Object getAmisInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containersInput"></a>

```java
public java.lang.Object getContainersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotsInput`<sup>Optional</sup> <a name="snapshotsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshotsInput"></a>

```java
public java.lang.Object getSnapshotsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amis"></a>

```java
public java.lang.Object getAmis();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containers"></a>

```java
public java.lang.Object getContainers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshots"></a>

```java
public java.lang.Object getSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailActionList <a name="ImagebuilderLifecyclePolicyPolicyDetailActionList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailActionList;

new ImagebuilderLifecyclePolicyPolicyDetailActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.putIncludeResources">putIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resetIncludeResources">resetIncludeResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeResources` <a name="putIncludeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.putIncludeResources"></a>

```java
public void putIncludeResources(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.putIncludeResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>>

---

##### `resetIncludeResources` <a name="resetIncludeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resetIncludeResources"></a>

```java
public void resetIncludeResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResources">includeResources</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResourcesInput">includeResourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeResources`<sup>Required</sup> <a name="includeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResources"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList getIncludeResources();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList</a>

---

##### `includeResourcesInput`<sup>Optional</sup> <a name="includeResourcesInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResourcesInput"></a>

```java
public java.lang.Object getIncludeResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList;

new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList;

new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.putLastLaunched">putLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetLastLaunched">resetLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetSharedAccounts">resetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastLaunched` <a name="putLastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.putLastLaunched"></a>

```java
public void putLastLaunched(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.putLastLaunched.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>>

---

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetIsPublic"></a>

```java
public void resetIsPublic()
```

##### `resetLastLaunched` <a name="resetLastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetLastLaunched"></a>

```java
public void resetLastLaunched()
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetSharedAccounts` <a name="resetSharedAccounts" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetSharedAccounts"></a>

```java
public void resetSharedAccounts()
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetTagMap"></a>

```java
public void resetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunched">lastLaunched</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublicInput">isPublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunchedInput">lastLaunchedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccountsInput">sharedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccounts">sharedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastLaunched`<sup>Required</sup> <a name="lastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList getLastLaunched();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList</a>

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublicInput"></a>

```java
public java.lang.Object getIsPublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lastLaunchedInput`<sup>Optional</sup> <a name="lastLaunchedInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunchedInput"></a>

```java
public java.lang.Object getLastLaunchedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedAccountsInput`<sup>Optional</sup> <a name="sharedAccountsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getSharedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedAccounts`<sup>Required</sup> <a name="sharedAccounts" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```java
public java.util.List<java.lang.String> getSharedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList;

new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.putAmis">putAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmis` <a name="putAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.putAmis"></a>

```java
public void putAmis(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.putAmis.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>>

---

##### `resetAmis` <a name="resetAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetAmis"></a>

```java
public void resetAmis()
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetTagMap"></a>

```java
public void resetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amis">amis</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amisInput">amisInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amis"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList getAmis();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList</a>

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amisInput"></a>

```java
public java.lang.Object getAmisInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>>

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailFilterList <a name="ImagebuilderLifecyclePolicyPolicyDetailFilterList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailFilterList;

new ImagebuilderLifecyclePolicyPolicyDetailFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetRetainAtLeast">resetRetainAtLeast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetainAtLeast` <a name="resetRetainAtLeast" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetRetainAtLeast"></a>

```java
public void resetRetainAtLeast()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeastInput">retainAtLeastInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeast">retainAtLeast</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retainAtLeastInput`<sup>Optional</sup> <a name="retainAtLeastInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeastInput"></a>

```java
public java.lang.Number getRetainAtLeastInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `retainAtLeast`<sup>Required</sup> <a name="retainAtLeast" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeast"></a>

```java
public java.lang.Number getRetainAtLeast();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailList <a name="ImagebuilderLifecyclePolicyPolicyDetailList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailList;

new ImagebuilderLifecyclePolicyPolicyDetailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.get"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>>

---


### ImagebuilderLifecyclePolicyPolicyDetailOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference;

new ImagebuilderLifecyclePolicyPolicyDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putExclusionRules">putExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetExclusionRules">resetExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyPolicyDetailAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>>

---

##### `putExclusionRules` <a name="putExclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putExclusionRules"></a>

```java
public void putExclusionRules(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyPolicyDetailExclusionRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putExclusionRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyPolicyDetailFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetExclusionRules` <a name="resetExclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetExclusionRules"></a>

```java
public void resetExclusionRules()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList">ImagebuilderLifecyclePolicyPolicyDetailActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRules">exclusionRules</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList">ImagebuilderLifecyclePolicyPolicyDetailFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRulesInput">exclusionRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.action"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList">ImagebuilderLifecyclePolicyPolicyDetailActionList</a>

---

##### `exclusionRules`<sup>Required</sup> <a name="exclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRules"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList getExclusionRules();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filter"></a>

```java
public ImagebuilderLifecyclePolicyPolicyDetailFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList">ImagebuilderLifecyclePolicyPolicyDetailFilterList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>>

---

##### `exclusionRulesInput`<sup>Optional</sup> <a name="exclusionRulesInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRulesInput"></a>

```java
public java.lang.Object getExclusionRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionList <a name="ImagebuilderLifecyclePolicyResourceSelectionList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionList;

new ImagebuilderLifecyclePolicyResourceSelectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.get"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>>

---


### ImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference;

new ImagebuilderLifecyclePolicyResourceSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipe">putRecipe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipe">resetRecipe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecipe` <a name="putRecipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipe"></a>

```java
public void putRecipe(IResolvable OR java.util.List<ImagebuilderLifecyclePolicyResourceSelectionRecipe> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipe.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>>

---

##### `resetRecipe` <a name="resetRecipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipe"></a>

```java
public void resetRecipe()
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap"></a>

```java
public void resetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipe">recipe</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList">ImagebuilderLifecyclePolicyResourceSelectionRecipeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipeInput">recipeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">tagMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipe"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelectionRecipeList getRecipe();
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList">ImagebuilderLifecyclePolicyResourceSelectionRecipeList</a>

---

##### `recipeInput`<sup>Optional</sup> <a name="recipeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipeInput"></a>

```java
public java.lang.Object getRecipeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>>

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipeList <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipeList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList;

new ImagebuilderLifecyclePolicyResourceSelectionRecipeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.get"></a>

```java
public ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.imagebuilder_lifecycle_policy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference;

new ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersionInput">semanticVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersion">semanticVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersionInput"></a>

```java
public java.lang.String getSemanticVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersion"></a>

```java
public java.lang.String getSemanticVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>

---



