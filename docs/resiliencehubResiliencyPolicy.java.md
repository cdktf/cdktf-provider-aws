# `resiliencehubResiliencyPolicy` Submodule <a name="`resiliencehubResiliencyPolicy` Submodule" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubResiliencyPolicy <a name="ResiliencehubResiliencyPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .tier(java.lang.String)
//  .dataLocationConstraint(java.lang.String)
//  .description(java.lang.String)
//  .policy(ResiliencehubResiliencyPolicyPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ResiliencehubResiliencyPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical). |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dataLocationConstraint">dataLocationConstraint</a></code> | <code>java.lang.String</code> | Specifies a high-level geographical location constraint for where resilience policy data can be stored. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the policy. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policy">policy</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | policy block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#name ResiliencehubResiliencyPolicy#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `dataLocationConstraint`<sup>Optional</sup> <a name="dataLocationConstraint" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dataLocationConstraint"></a>

- *Type:* java.lang.String

Specifies a high-level geographical location constraint for where resilience policy data can be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#description ResiliencehubResiliencyPolicy#description}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policy"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#timeouts ResiliencehubResiliencyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint">resetDataLocationConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy"></a>

```java
public void putPolicy(ResiliencehubResiliencyPolicyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putTimeouts"></a>

```java
public void putTimeouts(ResiliencehubResiliencyPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a>

---

##### `resetDataLocationConstraint` <a name="resetDataLocationConstraint" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint"></a>

```java
public void resetDataLocationConstraint()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResiliencehubResiliencyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResiliencehubResiliencyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.estimatedCostTier">estimatedCostTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference">ResiliencehubResiliencyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput">dataLocationConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint">dataLocationConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `estimatedCostTier`<sup>Required</sup> <a name="estimatedCostTier" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.estimatedCostTier"></a>

```java
public java.lang.String getEstimatedCostTier();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy"></a>

```java
public ResiliencehubResiliencyPolicyPolicyOutputReference getPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeouts"></a>

```java
public ResiliencehubResiliencyPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference">ResiliencehubResiliencyPolicyTimeoutsOutputReference</a>

---

##### `dataLocationConstraintInput`<sup>Optional</sup> <a name="dataLocationConstraintInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput"></a>

```java
public java.lang.String getDataLocationConstraintInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a>

---

##### `dataLocationConstraint`<sup>Required</sup> <a name="dataLocationConstraint" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint"></a>

```java
public java.lang.String getDataLocationConstraint();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubResiliencyPolicyConfig <a name="ResiliencehubResiliencyPolicyConfig" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyConfig;

ResiliencehubResiliencyPolicyConfig.builder()
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
    .name(java.lang.String)
    .tier(java.lang.String)
//  .dataLocationConstraint(java.lang.String)
//  .description(java.lang.String)
//  .policy(ResiliencehubResiliencyPolicyPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ResiliencehubResiliencyPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical). |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint">dataLocationConstraint</a></code> | <code>java.lang.String</code> | Specifies a high-level geographical location constraint for where resilience policy data can be stored. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the policy. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | policy block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#name ResiliencehubResiliencyPolicy#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `dataLocationConstraint`<sup>Optional</sup> <a name="dataLocationConstraint" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint"></a>

```java
public java.lang.String getDataLocationConstraint();
```

- *Type:* java.lang.String

Specifies a high-level geographical location constraint for where resilience policy data can be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#description ResiliencehubResiliencyPolicy#description}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy"></a>

```java
public ResiliencehubResiliencyPolicyPolicy getPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.timeouts"></a>

```java
public ResiliencehubResiliencyPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#timeouts ResiliencehubResiliencyPolicy#timeouts}

---

### ResiliencehubResiliencyPolicyPolicy <a name="ResiliencehubResiliencyPolicyPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicy;

ResiliencehubResiliencyPolicyPolicy.builder()
    .az(ResiliencehubResiliencyPolicyPolicyAz)
    .hardware(ResiliencehubResiliencyPolicyPolicyHardware)
    .softwareAttribute(ResiliencehubResiliencyPolicyPolicySoftware)
//  .region(ResiliencehubResiliencyPolicyPolicyRegion)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az">az</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | az block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware">hardware</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | hardware block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute">softwareAttribute</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | software block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region">region</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | region block. |

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az"></a>

```java
public ResiliencehubResiliencyPolicyPolicyAz getAz();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

az block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware"></a>

```java
public ResiliencehubResiliencyPolicyPolicyHardware getHardware();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

hardware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}

---

##### `softwareAttribute`<sup>Required</sup> <a name="softwareAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute"></a>

```java
public ResiliencehubResiliencyPolicyPolicySoftware getSoftwareAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

software block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region"></a>

```java
public ResiliencehubResiliencyPolicyPolicyRegion getRegion();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}

---

### ResiliencehubResiliencyPolicyPolicyAz <a name="ResiliencehubResiliencyPolicyPolicyAz" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyAz;

ResiliencehubResiliencyPolicyPolicyAz.builder()
    .rpo(java.lang.String)
    .rto(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpo">rpo</a></code> | <code>java.lang.String</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rto">rto</a></code> | <code>java.lang.String</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `rto`<sup>Required</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyPolicyHardware <a name="ResiliencehubResiliencyPolicyPolicyHardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyHardware;

ResiliencehubResiliencyPolicyPolicyHardware.builder()
    .rpo(java.lang.String)
    .rto(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpo">rpo</a></code> | <code>java.lang.String</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rto">rto</a></code> | <code>java.lang.String</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `rto`<sup>Required</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyPolicyRegion <a name="ResiliencehubResiliencyPolicyPolicyRegion" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyRegion;

ResiliencehubResiliencyPolicyPolicyRegion.builder()
//  .rpo(java.lang.String)
//  .rto(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpo">rpo</a></code> | <code>java.lang.String</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rto">rto</a></code> | <code>java.lang.String</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `rpo`<sup>Optional</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `rto`<sup>Optional</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyPolicySoftware <a name="ResiliencehubResiliencyPolicyPolicySoftware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicySoftware;

ResiliencehubResiliencyPolicyPolicySoftware.builder()
    .rpo(java.lang.String)
    .rto(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpo">rpo</a></code> | <code>java.lang.String</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rto">rto</a></code> | <code>java.lang.String</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `rto`<sup>Required</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyTimeouts <a name="ResiliencehubResiliencyPolicyTimeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyTimeouts;

ResiliencehubResiliencyPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#create ResiliencehubResiliencyPolicy#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#delete ResiliencehubResiliencyPolicy#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/resiliencehub_resiliency_policy#update ResiliencehubResiliencyPolicy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubResiliencyPolicyPolicyAzOutputReference <a name="ResiliencehubResiliencyPolicyPolicyAzOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyAzOutputReference;

new ResiliencehubResiliencyPolicyPolicyAzOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInput">rpoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInput">rtoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpo">rpo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rto">rto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInput`<sup>Optional</sup> <a name="rpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInput"></a>

```java
public java.lang.String getRpoInput();
```

- *Type:* java.lang.String

---

##### `rtoInput`<sup>Optional</sup> <a name="rtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInput"></a>

```java
public java.lang.String getRtoInput();
```

- *Type:* java.lang.String

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

---

##### `rto`<sup>Required</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---


### ResiliencehubResiliencyPolicyPolicyHardwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicyHardwareOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference;

new ResiliencehubResiliencyPolicyPolicyHardwareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInput">rpoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInput">rtoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpo">rpo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rto">rto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInput`<sup>Optional</sup> <a name="rpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInput"></a>

```java
public java.lang.String getRpoInput();
```

- *Type:* java.lang.String

---

##### `rtoInput`<sup>Optional</sup> <a name="rtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInput"></a>

```java
public java.lang.String getRtoInput();
```

- *Type:* java.lang.String

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

---

##### `rto`<sup>Required</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---


### ResiliencehubResiliencyPolicyPolicyOutputReference <a name="ResiliencehubResiliencyPolicyPolicyOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyOutputReference;

new ResiliencehubResiliencyPolicyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz">putAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware">putHardware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion">putRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute">putSoftwareAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAz` <a name="putAz" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz"></a>

```java
public void putAz(ResiliencehubResiliencyPolicyPolicyAz value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---

##### `putHardware` <a name="putHardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware"></a>

```java
public void putHardware(ResiliencehubResiliencyPolicyPolicyHardware value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---

##### `putRegion` <a name="putRegion" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion"></a>

```java
public void putRegion(ResiliencehubResiliencyPolicyPolicyRegion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---

##### `putSoftwareAttribute` <a name="putSoftwareAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute"></a>

```java
public void putSoftwareAttribute(ResiliencehubResiliencyPolicyPolicySoftware value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az">az</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware">hardware</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region">region</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute">softwareAttribute</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput">azInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput">hardwareInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput">regionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput">softwareAttributeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az"></a>

```java
public ResiliencehubResiliencyPolicyPolicyAzOutputReference getAz();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a>

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware"></a>

```java
public ResiliencehubResiliencyPolicyPolicyHardwareOutputReference getHardware();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region"></a>

```java
public ResiliencehubResiliencyPolicyPolicyRegionOutputReference getRegion();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a>

---

##### `softwareAttribute`<sup>Required</sup> <a name="softwareAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute"></a>

```java
public ResiliencehubResiliencyPolicyPolicySoftwareOutputReference getSoftwareAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a>

---

##### `azInput`<sup>Optional</sup> <a name="azInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput"></a>

```java
public java.lang.Object getAzInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---

##### `hardwareInput`<sup>Optional</sup> <a name="hardwareInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput"></a>

```java
public java.lang.Object getHardwareInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput"></a>

```java
public java.lang.Object getRegionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---

##### `softwareAttributeInput`<sup>Optional</sup> <a name="softwareAttributeInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput"></a>

```java
public java.lang.Object getSoftwareAttributeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---


### ResiliencehubResiliencyPolicyPolicyRegionOutputReference <a name="ResiliencehubResiliencyPolicyPolicyRegionOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference;

new ResiliencehubResiliencyPolicyPolicyRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpo">resetRpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRto">resetRto</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRpo` <a name="resetRpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpo"></a>

```java
public void resetRpo()
```

##### `resetRto` <a name="resetRto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRto"></a>

```java
public void resetRto()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInput">rpoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInput">rtoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpo">rpo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rto">rto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInput`<sup>Optional</sup> <a name="rpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInput"></a>

```java
public java.lang.String getRpoInput();
```

- *Type:* java.lang.String

---

##### `rtoInput`<sup>Optional</sup> <a name="rtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInput"></a>

```java
public java.lang.String getRtoInput();
```

- *Type:* java.lang.String

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

---

##### `rto`<sup>Required</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---


### ResiliencehubResiliencyPolicyPolicySoftwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicySoftwareOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference;

new ResiliencehubResiliencyPolicyPolicySoftwareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInput">rpoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInput">rtoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpo">rpo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rto">rto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInput`<sup>Optional</sup> <a name="rpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInput"></a>

```java
public java.lang.String getRpoInput();
```

- *Type:* java.lang.String

---

##### `rtoInput`<sup>Optional</sup> <a name="rtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInput"></a>

```java
public java.lang.String getRtoInput();
```

- *Type:* java.lang.String

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpo"></a>

```java
public java.lang.String getRpo();
```

- *Type:* java.lang.String

---

##### `rto`<sup>Required</sup> <a name="rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rto"></a>

```java
public java.lang.String getRto();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---


### ResiliencehubResiliencyPolicyTimeoutsOutputReference <a name="ResiliencehubResiliencyPolicyTimeoutsOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyTimeoutsOutputReference;

new ResiliencehubResiliencyPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a>

---



