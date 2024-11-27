# `emrBlockPublicAccessConfiguration` Submodule <a name="`emrBlockPublicAccessConfiguration` Submodule" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrBlockPublicAccessConfiguration <a name="EmrBlockPublicAccessConfiguration" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration aws_emr_block_public_access_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfiguration;

EmrBlockPublicAccessConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .blockPublicSecurityGroupRules(java.lang.Boolean)
    .blockPublicSecurityGroupRules(IResolvable)
//  .id(java.lang.String)
//  .permittedPublicSecurityGroupRuleRange(IResolvable)
//  .permittedPublicSecurityGroupRuleRange(java.util.List<EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.blockPublicSecurityGroupRules">blockPublicSecurityGroupRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.permittedPublicSecurityGroupRuleRange">permittedPublicSecurityGroupRuleRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>></code> | permitted_public_security_group_rule_range block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockPublicSecurityGroupRules`<sup>Required</sup> <a name="blockPublicSecurityGroupRules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.blockPublicSecurityGroupRules"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permittedPublicSecurityGroupRuleRange`<sup>Optional</sup> <a name="permittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.permittedPublicSecurityGroupRuleRange"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>>

permitted_public_security_group_rule_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange">putPermittedPublicSecurityGroupRuleRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange">resetPermittedPublicSecurityGroupRuleRange</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermittedPublicSecurityGroupRuleRange` <a name="putPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange"></a>

```java
public void putPermittedPublicSecurityGroupRuleRange(IResolvable OR java.util.List<EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetPermittedPublicSecurityGroupRuleRange` <a name="resetPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange"></a>

```java
public void resetPermittedPublicSecurityGroupRuleRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmrBlockPublicAccessConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfiguration;

EmrBlockPublicAccessConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfiguration;

EmrBlockPublicAccessConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfiguration;

EmrBlockPublicAccessConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfiguration;

EmrBlockPublicAccessConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmrBlockPublicAccessConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EmrBlockPublicAccessConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmrBlockPublicAccessConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmrBlockPublicAccessConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EmrBlockPublicAccessConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange">permittedPublicSecurityGroupRuleRange</a></code> | <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput">blockPublicSecurityGroupRulesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput">permittedPublicSecurityGroupRuleRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules">blockPublicSecurityGroupRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `permittedPublicSecurityGroupRuleRange`<sup>Required</sup> <a name="permittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange"></a>

```java
public EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList getPermittedPublicSecurityGroupRuleRange();
```

- *Type:* <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a>

---

##### `blockPublicSecurityGroupRulesInput`<sup>Optional</sup> <a name="blockPublicSecurityGroupRulesInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput"></a>

```java
public java.lang.Object getBlockPublicSecurityGroupRulesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `permittedPublicSecurityGroupRuleRangeInput`<sup>Optional</sup> <a name="permittedPublicSecurityGroupRuleRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput"></a>

```java
public java.lang.Object getPermittedPublicSecurityGroupRuleRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>>

---

##### `blockPublicSecurityGroupRules`<sup>Required</sup> <a name="blockPublicSecurityGroupRules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules"></a>

```java
public java.lang.Object getBlockPublicSecurityGroupRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrBlockPublicAccessConfigurationConfig <a name="EmrBlockPublicAccessConfigurationConfig" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfigurationConfig;

EmrBlockPublicAccessConfigurationConfig.builder()
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
    .blockPublicSecurityGroupRules(java.lang.Boolean)
    .blockPublicSecurityGroupRules(IResolvable)
//  .id(java.lang.String)
//  .permittedPublicSecurityGroupRuleRange(IResolvable)
//  .permittedPublicSecurityGroupRuleRange(java.util.List<EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules">blockPublicSecurityGroupRules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange">permittedPublicSecurityGroupRuleRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>></code> | permitted_public_security_group_rule_range block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockPublicSecurityGroupRules`<sup>Required</sup> <a name="blockPublicSecurityGroupRules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules"></a>

```java
public java.lang.Object getBlockPublicSecurityGroupRules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permittedPublicSecurityGroupRuleRange`<sup>Optional</sup> <a name="permittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange"></a>

```java
public java.lang.Object getPermittedPublicSecurityGroupRuleRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>>

permitted_public_security_group_rule_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}

---

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange;

EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.builder()
    .maxRange(java.lang.Number)
    .minRange(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange">maxRange</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange">minRange</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}. |

---

##### `maxRange`<sup>Required</sup> <a name="maxRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange"></a>

```java
public java.lang.Number getMaxRange();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}.

---

##### `minRange`<sup>Required</sup> <a name="minRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange"></a>

```java
public java.lang.Number getMinRange();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList;

new EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get"></a>

```java
public EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>>

---


### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_block_public_access_configuration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference;

new EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput">maxRangeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput">minRangeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange">maxRange</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange">minRange</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRangeInput`<sup>Optional</sup> <a name="maxRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput"></a>

```java
public java.lang.Number getMaxRangeInput();
```

- *Type:* java.lang.Number

---

##### `minRangeInput`<sup>Optional</sup> <a name="minRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput"></a>

```java
public java.lang.Number getMinRangeInput();
```

- *Type:* java.lang.Number

---

##### `maxRange`<sup>Required</sup> <a name="maxRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange"></a>

```java
public java.lang.Number getMaxRange();
```

- *Type:* java.lang.Number

---

##### `minRange`<sup>Required</sup> <a name="minRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange"></a>

```java
public java.lang.Number getMinRange();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>

---



