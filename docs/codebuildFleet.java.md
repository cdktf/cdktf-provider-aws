# `codebuildFleet` Submodule <a name="`codebuildFleet` Submodule" id="@cdktf/provider-aws.codebuildFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildFleet <a name="CodebuildFleet" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet aws_codebuild_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleet;

CodebuildFleet.Builder.create(Construct scope, java.lang.String id)
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
    .baseCapacity(java.lang.Number)
    .computeType(java.lang.String)
    .environmentType(java.lang.String)
    .name(java.lang.String)
//  .computeConfiguration(CodebuildFleetComputeConfiguration)
//  .fleetServiceRole(java.lang.String)
//  .imageId(java.lang.String)
//  .overflowBehavior(java.lang.String)
//  .region(java.lang.String)
//  .scalingConfiguration(CodebuildFleetScalingConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConfig(IResolvable)
//  .vpcConfig(java.util.List<CodebuildFleetVpcConfig>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.computeType">computeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | compute_configuration block. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetServiceRole">fleetServiceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.overflowBehavior">overflowBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags_all CodebuildFleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.vpcConfig">vpcConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>></code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.baseCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}.

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.computeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}.

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.environmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}.

---

##### `computeConfiguration`<sup>Optional</sup> <a name="computeConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.computeConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

compute_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}

---

##### `fleetServiceRole`<sup>Optional</sup> <a name="fleetServiceRole" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.fleetServiceRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}.

---

##### `overflowBehavior`<sup>Optional</sup> <a name="overflowBehavior" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.overflowBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#region CodebuildFleet#region}

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.scalingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags_all CodebuildFleet#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.Initializer.parameter.vpcConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#vpc_config CodebuildFleet#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putComputeConfiguration">putComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putScalingConfiguration">putScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetComputeConfiguration">resetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetFleetServiceRole">resetFleetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetOverflowBehavior">resetOverflowBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetScalingConfiguration">resetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeConfiguration` <a name="putComputeConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putComputeConfiguration"></a>

```java
public void putComputeConfiguration(CodebuildFleetComputeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putComputeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `putScalingConfiguration` <a name="putScalingConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putScalingConfiguration"></a>

```java
public void putScalingConfiguration(CodebuildFleetScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putVpcConfig"></a>

```java
public void putVpcConfig(IResolvable OR java.util.List<CodebuildFleetVpcConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.putVpcConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>>

---

##### `resetComputeConfiguration` <a name="resetComputeConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetComputeConfiguration"></a>

```java
public void resetComputeConfiguration()
```

##### `resetFleetServiceRole` <a name="resetFleetServiceRole" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetFleetServiceRole"></a>

```java
public void resetFleetServiceRole()
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetOverflowBehavior` <a name="resetOverflowBehavior" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetOverflowBehavior"></a>

```java
public void resetOverflowBehavior()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScalingConfiguration` <a name="resetScalingConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetScalingConfiguration"></a>

```java
public void resetScalingConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildFleet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleet;

CodebuildFleet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleet;

CodebuildFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleet;

CodebuildFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleet;

CodebuildFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodebuildFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CodebuildFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodebuildFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodebuildFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.status">status</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList">CodebuildFleetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList">CodebuildFleetVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.baseCapacityInput">baseCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeConfigurationInput">computeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeTypeInput">computeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.environmentTypeInput">environmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput">fleetServiceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput">overflowBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput">scalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.vpcConfigInput">vpcConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeType">computeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.fleetServiceRole">fleetServiceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.overflowBehavior">overflowBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `computeConfiguration`<sup>Required</sup> <a name="computeConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeConfiguration"></a>

```java
public CodebuildFleetComputeConfigurationOutputReference getComputeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.scalingConfiguration"></a>

```java
public CodebuildFleetScalingConfigurationOutputReference getScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.status"></a>

```java
public CodebuildFleetStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList">CodebuildFleetStatusList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.vpcConfig"></a>

```java
public CodebuildFleetVpcConfigList getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList">CodebuildFleetVpcConfigList</a>

---

##### `baseCapacityInput`<sup>Optional</sup> <a name="baseCapacityInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.baseCapacityInput"></a>

```java
public java.lang.Number getBaseCapacityInput();
```

- *Type:* java.lang.Number

---

##### `computeConfigurationInput`<sup>Optional</sup> <a name="computeConfigurationInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeConfigurationInput"></a>

```java
public CodebuildFleetComputeConfiguration getComputeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeTypeInput"></a>

```java
public java.lang.String getComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.environmentTypeInput"></a>

```java
public java.lang.String getEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `fleetServiceRoleInput`<sup>Optional</sup> <a name="fleetServiceRoleInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput"></a>

```java
public java.lang.String getFleetServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overflowBehaviorInput`<sup>Optional</sup> <a name="overflowBehaviorInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput"></a>

```java
public java.lang.String getOverflowBehaviorInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationInput`<sup>Optional</sup> <a name="scalingConfigurationInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput"></a>

```java
public CodebuildFleetScalingConfiguration getScalingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.vpcConfigInput"></a>

```java
public java.lang.Object getVpcConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>>

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.baseCapacity"></a>

```java
public java.lang.Number getBaseCapacity();
```

- *Type:* java.lang.Number

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `fleetServiceRole`<sup>Required</sup> <a name="fleetServiceRole" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.fleetServiceRole"></a>

```java
public java.lang.String getFleetServiceRole();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `overflowBehavior`<sup>Required</sup> <a name="overflowBehavior" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.overflowBehavior"></a>

```java
public java.lang.String getOverflowBehavior();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildFleetComputeConfiguration <a name="CodebuildFleetComputeConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetComputeConfiguration;

CodebuildFleetComputeConfiguration.builder()
//  .disk(java.lang.Number)
//  .instanceType(java.lang.String)
//  .machineType(java.lang.String)
//  .memory(java.lang.Number)
//  .vcpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk">disk</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory">memory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.vcpu">vcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#vcpu CodebuildFleet#vcpu}. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk"></a>

```java
public java.lang.Number getDisk();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}.

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}.

---

##### `vcpu`<sup>Optional</sup> <a name="vcpu" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration.property.vcpu"></a>

```java
public java.lang.Number getVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#vcpu CodebuildFleet#vcpu}.

---

### CodebuildFleetConfig <a name="CodebuildFleetConfig" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetConfig;

CodebuildFleetConfig.builder()
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
    .baseCapacity(java.lang.Number)
    .computeType(java.lang.String)
    .environmentType(java.lang.String)
    .name(java.lang.String)
//  .computeConfiguration(CodebuildFleetComputeConfiguration)
//  .fleetServiceRole(java.lang.String)
//  .imageId(java.lang.String)
//  .overflowBehavior(java.lang.String)
//  .region(java.lang.String)
//  .scalingConfiguration(CodebuildFleetScalingConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcConfig(IResolvable)
//  .vpcConfig(java.util.List<CodebuildFleetVpcConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.baseCapacity">baseCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.computeType">computeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | compute_configuration block. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole">fleetServiceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior">overflowBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags_all CodebuildFleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.vpcConfig">vpcConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.baseCapacity"></a>

```java
public java.lang.Number getBaseCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}.

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}.

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}.

---

##### `computeConfiguration`<sup>Optional</sup> <a name="computeConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration"></a>

```java
public CodebuildFleetComputeConfiguration getComputeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

compute_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}

---

##### `fleetServiceRole`<sup>Optional</sup> <a name="fleetServiceRole" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole"></a>

```java
public java.lang.String getFleetServiceRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}.

---

##### `overflowBehavior`<sup>Optional</sup> <a name="overflowBehavior" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior"></a>

```java
public java.lang.String getOverflowBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#region CodebuildFleet#region}

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration"></a>

```java
public CodebuildFleetScalingConfiguration getScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#tags_all CodebuildFleet#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetConfig.property.vpcConfig"></a>

```java
public java.lang.Object getVpcConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#vpc_config CodebuildFleet#vpc_config}

---

### CodebuildFleetScalingConfiguration <a name="CodebuildFleetScalingConfiguration" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetScalingConfiguration;

CodebuildFleetScalingConfiguration.builder()
//  .maxCapacity(java.lang.Number)
//  .scalingType(java.lang.String)
//  .targetTrackingScalingConfigs(IResolvable)
//  .targetTrackingScalingConfigs(java.util.List<CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType">scalingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs">targetTrackingScalingConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>></code> | target_tracking_scaling_configs block. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}.

---

##### `scalingType`<sup>Optional</sup> <a name="scalingType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType"></a>

```java
public java.lang.String getScalingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}.

---

##### `targetTrackingScalingConfigs`<sup>Optional</sup> <a name="targetTrackingScalingConfigs" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs"></a>

```java
public java.lang.Object getTargetTrackingScalingConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

target_tracking_scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}

---

### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs;

CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.builder()
//  .metricType(java.lang.String)
//  .targetValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType">metricType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}. |

---

##### `metricType`<sup>Optional</sup> <a name="metricType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}.

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}.

---

### CodebuildFleetStatus <a name="CodebuildFleetStatus" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetStatus;

CodebuildFleetStatus.builder()
    .build();
```


### CodebuildFleetVpcConfig <a name="CodebuildFleetVpcConfig" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetVpcConfig;

CodebuildFleetVpcConfig.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnets(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildFleetComputeConfigurationOutputReference <a name="CodebuildFleetComputeConfigurationOutputReference" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetComputeConfigurationOutputReference;

new CodebuildFleetComputeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVcpu">resetVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetVcpu` <a name="resetVcpu" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVcpu"></a>

```java
public void resetVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput">diskInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vcpuInput">vcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk">disk</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vcpu">vcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput"></a>

```java
public java.lang.Number getDiskInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `vcpuInput`<sup>Optional</sup> <a name="vcpuInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vcpuInput"></a>

```java
public java.lang.Number getVcpuInput();
```

- *Type:* java.lang.Number

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk"></a>

```java
public java.lang.Number getDisk();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vcpu"></a>

```java
public java.lang.Number getVcpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue"></a>

```java
public CodebuildFleetComputeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---


### CodebuildFleetScalingConfigurationOutputReference <a name="CodebuildFleetScalingConfigurationOutputReference" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetScalingConfigurationOutputReference;

new CodebuildFleetScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs">putTargetTrackingScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType">resetScalingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs">resetTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingScalingConfigs` <a name="putTargetTrackingScalingConfigs" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs"></a>

```java
public void putTargetTrackingScalingConfigs(IResolvable OR java.util.List<CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

---

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetScalingType` <a name="resetScalingType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType"></a>

```java
public void resetScalingType()
```

##### `resetTargetTrackingScalingConfigs` <a name="resetTargetTrackingScalingConfigs" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs"></a>

```java
public void resetTargetTrackingScalingConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs">targetTrackingScalingConfigs</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput">scalingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput">targetTrackingScalingConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType">scalingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `targetTrackingScalingConfigs`<sup>Required</sup> <a name="targetTrackingScalingConfigs" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs"></a>

```java
public CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList getTargetTrackingScalingConfigs();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a>

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `scalingTypeInput`<sup>Optional</sup> <a name="scalingTypeInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput"></a>

```java
public java.lang.String getScalingTypeInput();
```

- *Type:* java.lang.String

---

##### `targetTrackingScalingConfigsInput`<sup>Optional</sup> <a name="targetTrackingScalingConfigsInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput"></a>

```java
public java.lang.Object getTargetTrackingScalingConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `scalingType`<sup>Required</sup> <a name="scalingType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType"></a>

```java
public java.lang.String getScalingType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue"></a>

```java
public CodebuildFleetScalingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList;

new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get"></a>

```java
public CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>>

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference;

new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType">resetMetricType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricType` <a name="resetMetricType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType"></a>

```java
public void resetMetricType()
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue"></a>

```java
public void resetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput">metricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue">targetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricTypeInput`<sup>Optional</sup> <a name="metricTypeInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput"></a>

```java
public java.lang.String getMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput"></a>

```java
public java.lang.Number getTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue"></a>

```java
public java.lang.Number getTargetValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>

---


### CodebuildFleetStatusList <a name="CodebuildFleetStatusList" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetStatusList;

new CodebuildFleetStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.get"></a>

```java
public CodebuildFleetStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CodebuildFleetStatusOutputReference <a name="CodebuildFleetStatusOutputReference" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetStatusOutputReference;

new CodebuildFleetStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatus">CodebuildFleetStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatusOutputReference.property.internalValue"></a>

```java
public CodebuildFleetStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetStatus">CodebuildFleetStatus</a>

---


### CodebuildFleetVpcConfigList <a name="CodebuildFleetVpcConfigList" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetVpcConfigList;

new CodebuildFleetVpcConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.get"></a>

```java
public CodebuildFleetVpcConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>>

---


### CodebuildFleetVpcConfigOutputReference <a name="CodebuildFleetVpcConfigOutputReference" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_fleet.CodebuildFleetVpcConfigOutputReference;

new CodebuildFleetVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildFleet.CodebuildFleetVpcConfig">CodebuildFleetVpcConfig</a>

---



