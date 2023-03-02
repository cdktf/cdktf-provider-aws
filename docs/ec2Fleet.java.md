# `ec2Fleet` Submodule <a name="`ec2Fleet` Submodule" id="@cdktf/provider-aws.ec2Fleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Fleet <a name="Ec2Fleet" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet aws_ec2_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2Fleet;

Ec2Fleet.Builder.create(Construct scope, java.lang.String id)
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
    .launchTemplateConfig(Ec2FleetLaunchTemplateConfig)
    .targetCapacitySpecification(Ec2FleetTargetCapacitySpecification)
//  .context(java.lang.String)
//  .excessCapacityTerminationPolicy(java.lang.String)
//  .id(java.lang.String)
//  .onDemandOptions(Ec2FleetOnDemandOptions)
//  .replaceUnhealthyInstances(java.lang.Boolean)
//  .replaceUnhealthyInstances(IResolvable)
//  .spotOptions(Ec2FleetSpotOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminateInstances(java.lang.Boolean)
//  .terminateInstances(IResolvable)
//  .terminateInstancesWithExpiration(java.lang.Boolean)
//  .terminateInstancesWithExpiration(IResolvable)
//  .timeouts(Ec2FleetTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.launchTemplateConfig">launchTemplateConfig</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.targetCapacitySpecification">targetCapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | target_capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.onDemandOptions">onDemandOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | on_demand_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.spotOptions">spotOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | spot_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstances">terminateInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `launchTemplateConfig`<sup>Required</sup> <a name="launchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.launchTemplateConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}

---

##### `targetCapacitySpecification`<sup>Required</sup> <a name="targetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.targetCapacitySpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

target_capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.context"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}.

---

##### `excessCapacityTerminationPolicy`<sup>Optional</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.excessCapacityTerminationPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onDemandOptions`<sup>Optional</sup> <a name="onDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.onDemandOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

on_demand_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}

---

##### `replaceUnhealthyInstances`<sup>Optional</sup> <a name="replaceUnhealthyInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.replaceUnhealthyInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}.

---

##### `spotOptions`<sup>Optional</sup> <a name="spotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.spotOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_options Ec2Fleet#spot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}.

---

##### `terminateInstances`<sup>Optional</sup> <a name="terminateInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstances"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}.

---

##### `terminateInstancesWithExpiration`<sup>Optional</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.terminateInstancesWithExpiration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#timeouts Ec2Fleet#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig">putLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions">putOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions">putSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification">putTargetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetExcessCapacityTerminationPolicy">resetExcessCapacityTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOnDemandOptions">resetOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetReplaceUnhealthyInstances">resetReplaceUnhealthyInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetSpotOptions">resetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstances">resetTerminateInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstancesWithExpiration">resetTerminateInstancesWithExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLaunchTemplateConfig` <a name="putLaunchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig"></a>

```java
public void putLaunchTemplateConfig(Ec2FleetLaunchTemplateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putLaunchTemplateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---

##### `putOnDemandOptions` <a name="putOnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions"></a>

```java
public void putOnDemandOptions(Ec2FleetOnDemandOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putOnDemandOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---

##### `putSpotOptions` <a name="putSpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions"></a>

```java
public void putSpotOptions(Ec2FleetSpotOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---

##### `putTargetCapacitySpecification` <a name="putTargetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification"></a>

```java
public void putTargetCapacitySpecification(Ec2FleetTargetCapacitySpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTargetCapacitySpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts"></a>

```java
public void putTimeouts(Ec2FleetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>

---

##### `resetContext` <a name="resetContext" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetContext"></a>

```java
public void resetContext()
```

##### `resetExcessCapacityTerminationPolicy` <a name="resetExcessCapacityTerminationPolicy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetExcessCapacityTerminationPolicy"></a>

```java
public void resetExcessCapacityTerminationPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetId"></a>

```java
public void resetId()
```

##### `resetOnDemandOptions` <a name="resetOnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetOnDemandOptions"></a>

```java
public void resetOnDemandOptions()
```

##### `resetReplaceUnhealthyInstances` <a name="resetReplaceUnhealthyInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetReplaceUnhealthyInstances"></a>

```java
public void resetReplaceUnhealthyInstances()
```

##### `resetSpotOptions` <a name="resetSpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetSpotOptions"></a>

```java
public void resetSpotOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTerminateInstances` <a name="resetTerminateInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstances"></a>

```java
public void resetTerminateInstances()
```

##### `resetTerminateInstancesWithExpiration` <a name="resetTerminateInstancesWithExpiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTerminateInstancesWithExpiration"></a>

```java
public void resetTerminateInstancesWithExpiration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2Fleet;

Ec2Fleet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2Fleet;

Ec2Fleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2Fleet;

Ec2Fleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfig">launchTemplateConfig</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference">Ec2FleetLaunchTemplateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptions">onDemandOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference">Ec2FleetOnDemandOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference">Ec2FleetSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecification">targetCapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference">Ec2FleetTargetCapacitySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference">Ec2FleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicyInput">excessCapacityTerminationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfigInput">launchTemplateConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptionsInput">onDemandOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstancesInput">replaceUnhealthyInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptionsInput">spotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecificationInput">targetCapacitySpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesInput">terminateInstancesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpirationInput">terminateInstancesWithExpirationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstances">terminateInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `launchTemplateConfig`<sup>Required</sup> <a name="launchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfig"></a>

```java
public Ec2FleetLaunchTemplateConfigOutputReference getLaunchTemplateConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference">Ec2FleetLaunchTemplateConfigOutputReference</a>

---

##### `onDemandOptions`<sup>Required</sup> <a name="onDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptions"></a>

```java
public Ec2FleetOnDemandOptionsOutputReference getOnDemandOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference">Ec2FleetOnDemandOptionsOutputReference</a>

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptions"></a>

```java
public Ec2FleetSpotOptionsOutputReference getSpotOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference">Ec2FleetSpotOptionsOutputReference</a>

---

##### `targetCapacitySpecification`<sup>Required</sup> <a name="targetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecification"></a>

```java
public Ec2FleetTargetCapacitySpecificationOutputReference getTargetCapacitySpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference">Ec2FleetTargetCapacitySpecificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeouts"></a>

```java
public Ec2FleetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference">Ec2FleetTimeoutsOutputReference</a>

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `excessCapacityTerminationPolicyInput`<sup>Optional</sup> <a name="excessCapacityTerminationPolicyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicyInput"></a>

```java
public java.lang.String getExcessCapacityTerminationPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateConfigInput`<sup>Optional</sup> <a name="launchTemplateConfigInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.launchTemplateConfigInput"></a>

```java
public Ec2FleetLaunchTemplateConfig getLaunchTemplateConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---

##### `onDemandOptionsInput`<sup>Optional</sup> <a name="onDemandOptionsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.onDemandOptionsInput"></a>

```java
public Ec2FleetOnDemandOptions getOnDemandOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---

##### `replaceUnhealthyInstancesInput`<sup>Optional</sup> <a name="replaceUnhealthyInstancesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstancesInput"></a>

```java
public java.lang.Object getReplaceUnhealthyInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotOptionsInput`<sup>Optional</sup> <a name="spotOptionsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.spotOptionsInput"></a>

```java
public Ec2FleetSpotOptions getSpotOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetCapacitySpecificationInput`<sup>Optional</sup> <a name="targetCapacitySpecificationInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.targetCapacitySpecificationInput"></a>

```java
public Ec2FleetTargetCapacitySpecification getTargetCapacitySpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---

##### `terminateInstancesInput`<sup>Optional</sup> <a name="terminateInstancesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesInput"></a>

```java
public java.lang.Object getTerminateInstancesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminateInstancesWithExpirationInput`<sup>Optional</sup> <a name="terminateInstancesWithExpirationInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpirationInput"></a>

```java
public java.lang.Object getTerminateInstancesWithExpirationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `excessCapacityTerminationPolicy`<sup>Required</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.excessCapacityTerminationPolicy"></a>

```java
public java.lang.String getExcessCapacityTerminationPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `replaceUnhealthyInstances`<sup>Required</sup> <a name="replaceUnhealthyInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.replaceUnhealthyInstances"></a>

```java
public java.lang.Object getReplaceUnhealthyInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminateInstances`<sup>Required</sup> <a name="terminateInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstances"></a>

```java
public java.lang.Object getTerminateInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminateInstancesWithExpiration`<sup>Required</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.terminateInstancesWithExpiration"></a>

```java
public java.lang.Object getTerminateInstancesWithExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2Fleet.Ec2Fleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FleetConfig <a name="Ec2FleetConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetConfig;

Ec2FleetConfig.builder()
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
    .launchTemplateConfig(Ec2FleetLaunchTemplateConfig)
    .targetCapacitySpecification(Ec2FleetTargetCapacitySpecification)
//  .context(java.lang.String)
//  .excessCapacityTerminationPolicy(java.lang.String)
//  .id(java.lang.String)
//  .onDemandOptions(Ec2FleetOnDemandOptions)
//  .replaceUnhealthyInstances(java.lang.Boolean)
//  .replaceUnhealthyInstances(IResolvable)
//  .spotOptions(Ec2FleetSpotOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminateInstances(java.lang.Boolean)
//  .terminateInstances(IResolvable)
//  .terminateInstancesWithExpiration(java.lang.Boolean)
//  .terminateInstancesWithExpiration(IResolvable)
//  .timeouts(Ec2FleetTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.launchTemplateConfig">launchTemplateConfig</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | launch_template_config block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.targetCapacitySpecification">targetCapacitySpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | target_capacity_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.context">context</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.onDemandOptions">onDemandOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | on_demand_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | spot_options block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstances">terminateInstances</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `launchTemplateConfig`<sup>Required</sup> <a name="launchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.launchTemplateConfig"></a>

```java
public Ec2FleetLaunchTemplateConfig getLaunchTemplateConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

launch_template_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}

---

##### `targetCapacitySpecification`<sup>Required</sup> <a name="targetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.targetCapacitySpecification"></a>

```java
public Ec2FleetTargetCapacitySpecification getTargetCapacitySpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

target_capacity_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#context Ec2Fleet#context}.

---

##### `excessCapacityTerminationPolicy`<sup>Optional</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.excessCapacityTerminationPolicy"></a>

```java
public java.lang.String getExcessCapacityTerminationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#id Ec2Fleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onDemandOptions`<sup>Optional</sup> <a name="onDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.onDemandOptions"></a>

```java
public Ec2FleetOnDemandOptions getOnDemandOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

on_demand_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}

---

##### `replaceUnhealthyInstances`<sup>Optional</sup> <a name="replaceUnhealthyInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.replaceUnhealthyInstances"></a>

```java
public java.lang.Object getReplaceUnhealthyInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}.

---

##### `spotOptions`<sup>Optional</sup> <a name="spotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.spotOptions"></a>

```java
public Ec2FleetSpotOptions getSpotOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_options Ec2Fleet#spot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags Ec2Fleet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#tags_all Ec2Fleet#tags_all}.

---

##### `terminateInstances`<sup>Optional</sup> <a name="terminateInstances" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstances"></a>

```java
public java.lang.Object getTerminateInstances();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}.

---

##### `terminateInstancesWithExpiration`<sup>Optional</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.terminateInstancesWithExpiration"></a>

```java
public java.lang.Object getTerminateInstancesWithExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.timeouts"></a>

```java
public Ec2FleetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#timeouts Ec2Fleet#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#type Ec2Fleet#type}.

---

### Ec2FleetLaunchTemplateConfig <a name="Ec2FleetLaunchTemplateConfig" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfig;

Ec2FleetLaunchTemplateConfig.builder()
    .launchTemplateSpecification(Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification)
//  .override(IResolvable)
//  .override(java.util.List<Ec2FleetLaunchTemplateConfigOverride>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.override">override</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>></code> | override block. |

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.launchTemplateSpecification"></a>

```java
public Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_specification Ec2Fleet#launch_template_specification}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig.property.override"></a>

```java
public java.lang.Object getOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>>

override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#override Ec2Fleet#override}

---

### Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification <a name="Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification;

Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.builder()
    .version(java.lang.String)
//  .launchTemplateId(java.lang.String)
//  .launchTemplateName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#version Ec2Fleet#version}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#version Ec2Fleet#version}.

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}.

---

### Ec2FleetLaunchTemplateConfigOverride <a name="Ec2FleetLaunchTemplateConfigOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverride;

Ec2FleetLaunchTemplateConfigOverride.builder()
//  .availabilityZone(java.lang.String)
//  .instanceRequirements(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements)
//  .instanceType(java.lang.String)
//  .maxPrice(java.lang.String)
//  .priority(java.lang.Number)
//  .subnetId(java.lang.String)
//  .weightedCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#availability_zone Ec2Fleet#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_type Ec2Fleet#instance_type}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.maxPrice">maxPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max_price Ec2Fleet#max_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#priority Ec2Fleet#priority}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#subnet_id Ec2Fleet#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#availability_zone Ec2Fleet#availability_zone}.

---

##### `instanceRequirements`<sup>Optional</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceRequirements"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements getInstanceRequirements();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_requirements Ec2Fleet#instance_requirements}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_type Ec2Fleet#instance_type}.

---

##### `maxPrice`<sup>Optional</sup> <a name="maxPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.maxPrice"></a>

```java
public java.lang.String getMaxPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max_price Ec2Fleet#max_price}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#priority Ec2Fleet#priority}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#subnet_id Ec2Fleet#subnet_id}.

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.builder()
    .memoryMib(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib)
    .vcpuCount(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount)
//  .acceleratorCount(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount)
//  .acceleratorManufacturers(java.util.List<java.lang.String>)
//  .acceleratorNames(java.util.List<java.lang.String>)
//  .acceleratorTotalMemoryMib(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib)
//  .acceleratorTypes(java.util.List<java.lang.String>)
//  .bareMetal(java.lang.String)
//  .baselineEbsBandwidthMbps(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps)
//  .burstablePerformance(java.lang.String)
//  .cpuManufacturers(java.util.List<java.lang.String>)
//  .excludedInstanceTypes(java.util.List<java.lang.String>)
//  .instanceGenerations(java.util.List<java.lang.String>)
//  .localStorage(java.lang.String)
//  .localStorageTypes(java.util.List<java.lang.String>)
//  .memoryGibPerVcpu(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu)
//  .networkInterfaceCount(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount)
//  .onDemandMaxPricePercentageOverLowestPrice(java.lang.Number)
//  .requireHibernateSupport(java.lang.Boolean)
//  .requireHibernateSupport(IResolvable)
//  .spotMaxPricePercentageOverLowestPrice(java.lang.Number)
//  .totalLocalStorageGb(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorNames">acceleratorNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.bareMetal">bareMetal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#bare_metal Ec2Fleet#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.burstablePerformance">burstablePerformance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.cpuManufacturers">cpuManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.instanceGenerations">instanceGenerations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_generations Ec2Fleet#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorage">localStorage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage Ec2Fleet#local_storage}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorageTypes">localStorageTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |

---

##### `memoryMib`<sup>Required</sup> <a name="memoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryMib"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib getMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_mib Ec2Fleet#memory_mib}

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.vcpuCount"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount getVcpuCount();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#vcpu_count Ec2Fleet#vcpu_count}

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorCount"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount getAcceleratorCount();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_count Ec2Fleet#accelerator_count}

---

##### `acceleratorManufacturers`<sup>Optional</sup> <a name="acceleratorManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorManufacturers"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}.

---

##### `acceleratorNames`<sup>Optional</sup> <a name="acceleratorNames" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorNames"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}.

---

##### `acceleratorTotalMemoryMib`<sup>Optional</sup> <a name="acceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib getAcceleratorTotalMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_total_memory_mib Ec2Fleet#accelerator_total_memory_mib}

---

##### `acceleratorTypes`<sup>Optional</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}.

---

##### `bareMetal`<sup>Optional</sup> <a name="bareMetal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.bareMetal"></a>

```java
public java.lang.String getBareMetal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#bare_metal Ec2Fleet#bare_metal}.

---

##### `baselineEbsBandwidthMbps`<sup>Optional</sup> <a name="baselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps getBaselineEbsBandwidthMbps();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#baseline_ebs_bandwidth_mbps Ec2Fleet#baseline_ebs_bandwidth_mbps}

---

##### `burstablePerformance`<sup>Optional</sup> <a name="burstablePerformance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.burstablePerformance"></a>

```java
public java.lang.String getBurstablePerformance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}.

---

##### `cpuManufacturers`<sup>Optional</sup> <a name="cpuManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.cpuManufacturers"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}.

---

##### `excludedInstanceTypes`<sup>Optional</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}.

---

##### `instanceGenerations`<sup>Optional</sup> <a name="instanceGenerations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.instanceGenerations"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_generations Ec2Fleet#instance_generations}.

---

##### `localStorage`<sup>Optional</sup> <a name="localStorage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorage"></a>

```java
public java.lang.String getLocalStorage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage Ec2Fleet#local_storage}.

---

##### `localStorageTypes`<sup>Optional</sup> <a name="localStorageTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.localStorageTypes"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}.

---

##### `memoryGibPerVcpu`<sup>Optional</sup> <a name="memoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.memoryGibPerVcpu"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu getMemoryGibPerVcpu();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#memory_gib_per_vcpu Ec2Fleet#memory_gib_per_vcpu}

---

##### `networkInterfaceCount`<sup>Optional</sup> <a name="networkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.networkInterfaceCount"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount getNetworkInterfaceCount();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#network_interface_count Ec2Fleet#network_interface_count}

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}.

---

##### `requireHibernateSupport`<sup>Optional</sup> <a name="requireHibernateSupport" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.requireHibernateSupport"></a>

```java
public java.lang.Object getRequireHibernateSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}.

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}.

---

##### `totalLocalStorageGb`<sup>Optional</sup> <a name="totalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements.property.totalLocalStorageGb"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb getTotalLocalStorageGb();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_local_storage_gb Ec2Fleet#total_local_storage_gb}

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.builder()
    .min(java.lang.Number)
//  .max(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount;

Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.builder()
    .min(java.lang.Number)
//  .max(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}. |

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#min Ec2Fleet#min}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#max Ec2Fleet#max}.

---

### Ec2FleetOnDemandOptions <a name="Ec2FleetOnDemandOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetOnDemandOptions;

Ec2FleetOnDemandOptions.builder()
//  .allocationStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}. |

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

### Ec2FleetSpotOptions <a name="Ec2FleetSpotOptions" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetSpotOptions;

Ec2FleetSpotOptions.builder()
//  .allocationStrategy(java.lang.String)
//  .instanceInterruptionBehavior(java.lang.String)
//  .instancePoolsToUseCount(java.lang.Number)
//  .maintenanceStrategies(Ec2FleetSpotOptionsMaintenanceStrategies)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.maintenanceStrategies">maintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | maintenance_strategies block. |

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}.

---

##### `instanceInterruptionBehavior`<sup>Optional</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instanceInterruptionBehavior"></a>

```java
public java.lang.String getInstanceInterruptionBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}.

---

##### `maintenanceStrategies`<sup>Optional</sup> <a name="maintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions.property.maintenanceStrategies"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategies getMaintenanceStrategies();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

maintenance_strategies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#maintenance_strategies Ec2Fleet#maintenance_strategies}

---

### Ec2FleetSpotOptionsMaintenanceStrategies <a name="Ec2FleetSpotOptionsMaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetSpotOptionsMaintenanceStrategies;

Ec2FleetSpotOptionsMaintenanceStrategies.builder()
//  .capacityRebalance(Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance">capacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | capacity_rebalance block. |

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies.property.capacityRebalance"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance getCapacityRebalance();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#capacity_rebalance Ec2Fleet#capacity_rebalance}

---

### Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance <a name="Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;

Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.builder()
//  .replacementStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">replacementStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}. |

---

##### `replacementStrategy`<sup>Optional</sup> <a name="replacementStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```java
public java.lang.String getReplacementStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}.

---

### Ec2FleetTargetCapacitySpecification <a name="Ec2FleetTargetCapacitySpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetTargetCapacitySpecification;

Ec2FleetTargetCapacitySpecification.builder()
    .defaultTargetCapacityType(java.lang.String)
    .totalTargetCapacity(java.lang.Number)
//  .onDemandTargetCapacity(java.lang.Number)
//  .spotTargetCapacity(java.lang.Number)
//  .targetCapacityUnitType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType">defaultTargetCapacityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity">totalTargetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity">spotTargetCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType">targetCapacityUnitType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}. |

---

##### `defaultTargetCapacityType`<sup>Required</sup> <a name="defaultTargetCapacityType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.defaultTargetCapacityType"></a>

```java
public java.lang.String getDefaultTargetCapacityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}.

---

##### `totalTargetCapacity`<sup>Required</sup> <a name="totalTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.totalTargetCapacity"></a>

```java
public java.lang.Number getTotalTargetCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}.

---

##### `onDemandTargetCapacity`<sup>Optional</sup> <a name="onDemandTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.onDemandTargetCapacity"></a>

```java
public java.lang.Number getOnDemandTargetCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}.

---

##### `spotTargetCapacity`<sup>Optional</sup> <a name="spotTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.spotTargetCapacity"></a>

```java
public java.lang.Number getSpotTargetCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}.

---

##### `targetCapacityUnitType`<sup>Optional</sup> <a name="targetCapacityUnitType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification.property.targetCapacityUnitType"></a>

```java
public java.lang.String getTargetCapacityUnitType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}.

---

### Ec2FleetTimeouts <a name="Ec2FleetTimeouts" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetTimeouts;

Ec2FleetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#create Ec2Fleet#create}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#delete Ec2Fleet#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#update Ec2Fleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#create Ec2Fleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#delete Ec2Fleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet#update Ec2Fleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference <a name="Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;

new Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```java
public void resetLaunchTemplateId()
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```java
public void resetLaunchTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```java
public java.lang.String getLaunchTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```java
public java.lang.String getLaunchTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```java
public java.lang.String getLaunchTemplateId();
```

- *Type:* java.lang.String

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```java
public java.lang.String getLaunchTemplateName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---


### Ec2FleetLaunchTemplateConfigOutputReference <a name="Ec2FleetLaunchTemplateConfigOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOutputReference;

new Ec2FleetLaunchTemplateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification">putLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride">putOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resetOverride">resetOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchTemplateSpecification` <a name="putLaunchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification"></a>

```java
public void putLaunchTemplateSpecification(Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `putOverride` <a name="putOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride"></a>

```java
public void putOverride(IResolvable OR java.util.List<Ec2FleetLaunchTemplateConfigOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.putOverride.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>>

---

##### `resetOverride` <a name="resetOverride" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.resetOverride"></a>

```java
public void resetOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList">Ec2FleetLaunchTemplateConfigOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput">launchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.overrideInput">overrideInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecification"></a>

```java
public Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference getLaunchTemplateSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.override"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideList getOverride();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList">Ec2FleetLaunchTemplateConfigOverrideList</a>

---

##### `launchTemplateSpecificationInput`<sup>Optional</sup> <a name="launchTemplateSpecificationInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput"></a>

```java
public Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification getLaunchTemplateSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification">Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.overrideInput"></a>

```java
public java.lang.Object getOverrideInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfig">Ec2FleetLaunchTemplateConfig</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resetMax">resetMax</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```java
public void resetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount">putAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">putAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">putBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu">putMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib">putMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount">putNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb">putTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount">putVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers">resetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorNames">resetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">resetAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes">resetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBareMetal">resetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">resetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBurstablePerformance">resetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetCpuManufacturers">resetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes">resetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetInstanceGenerations">resetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorage">resetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes">resetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">resetMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount">resetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">resetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport">resetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">resetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb">resetTotalLocalStorageGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorCount` <a name="putAcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```java
public void putAcceleratorCount(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---

##### `putAcceleratorTotalMemoryMib` <a name="putAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```java
public void putAcceleratorTotalMemoryMib(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `putBaselineEbsBandwidthMbps` <a name="putBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```java
public void putBaselineEbsBandwidthMbps(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `putMemoryGibPerVcpu` <a name="putMemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```java
public void putMemoryGibPerVcpu(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `putMemoryMib` <a name="putMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib"></a>

```java
public void putMemoryMib(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---

##### `putNetworkInterfaceCount` <a name="putNetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```java
public void putNetworkInterfaceCount(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---

##### `putTotalLocalStorageGb` <a name="putTotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```java
public void putTotalLocalStorageGb(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---

##### `putVcpuCount` <a name="putVcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount"></a>

```java
public void putVcpuCount(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.putVcpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorManufacturers` <a name="resetAcceleratorManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```java
public void resetAcceleratorManufacturers()
```

##### `resetAcceleratorNames` <a name="resetAcceleratorNames" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```java
public void resetAcceleratorNames()
```

##### `resetAcceleratorTotalMemoryMib` <a name="resetAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```java
public void resetAcceleratorTotalMemoryMib()
```

##### `resetAcceleratorTypes` <a name="resetAcceleratorTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```java
public void resetAcceleratorTypes()
```

##### `resetBareMetal` <a name="resetBareMetal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBareMetal"></a>

```java
public void resetBareMetal()
```

##### `resetBaselineEbsBandwidthMbps` <a name="resetBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```java
public void resetBaselineEbsBandwidthMbps()
```

##### `resetBurstablePerformance` <a name="resetBurstablePerformance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```java
public void resetBurstablePerformance()
```

##### `resetCpuManufacturers` <a name="resetCpuManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```java
public void resetCpuManufacturers()
```

##### `resetExcludedInstanceTypes` <a name="resetExcludedInstanceTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```java
public void resetExcludedInstanceTypes()
```

##### `resetInstanceGenerations` <a name="resetInstanceGenerations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```java
public void resetInstanceGenerations()
```

##### `resetLocalStorage` <a name="resetLocalStorage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorage"></a>

```java
public void resetLocalStorage()
```

##### `resetLocalStorageTypes` <a name="resetLocalStorageTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```java
public void resetLocalStorageTypes()
```

##### `resetMemoryGibPerVcpu` <a name="resetMemoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```java
public void resetMemoryGibPerVcpu()
```

##### `resetNetworkInterfaceCount` <a name="resetNetworkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```java
public void resetNetworkInterfaceCount()
```

##### `resetOnDemandMaxPricePercentageOverLowestPrice` <a name="resetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```java
public void resetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `resetRequireHibernateSupport` <a name="resetRequireHibernateSupport" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```java
public void resetRequireHibernateSupport()
```

##### `resetSpotMaxPricePercentageOverLowestPrice` <a name="resetSpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```java
public void resetSpotMaxPricePercentageOverLowestPrice()
```

##### `resetTotalLocalStorageGb` <a name="resetTotalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```java
public void resetTotalLocalStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">acceleratorManufacturersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput">acceleratorNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">acceleratorTotalMemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput">acceleratorTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetalInput">bareMetalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">baselineEbsBandwidthMbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput">burstablePerformanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput">cpuManufacturersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excludedInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput">instanceGenerationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageInput">localStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput">localStorageTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">memoryGibPerVcpuInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMibInput">memoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput">networkInterfaceCountInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">onDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput">requireHibernateSupportInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">spotMaxPricePercentageOverLowestPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">totalLocalStorageGbInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCountInput">vcpuCountInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference getAcceleratorCount();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `acceleratorTotalMemoryMib`<sup>Required</sup> <a name="acceleratorTotalMemoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference getAcceleratorTotalMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference getBaselineEbsBandwidthMbps();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `memoryGibPerVcpu`<sup>Required</sup> <a name="memoryGibPerVcpu" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference getMemoryGibPerVcpu();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `memoryMib`<sup>Required</sup> <a name="memoryMib" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMib"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference getMemoryMib();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference getNetworkInterfaceCount();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference getTotalLocalStorageGb();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCount"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference getVcpuCount();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference</a>

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount getAcceleratorCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount</a>

---

##### `acceleratorManufacturersInput`<sup>Optional</sup> <a name="acceleratorManufacturersInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorNamesInput`<sup>Optional</sup> <a name="acceleratorNamesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorTotalMemoryMibInput`<sup>Optional</sup> <a name="acceleratorTotalMemoryMibInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib getAcceleratorTotalMemoryMibInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `acceleratorTypesInput`<sup>Optional</sup> <a name="acceleratorTypesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bareMetalInput`<sup>Optional</sup> <a name="bareMetalInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```java
public java.lang.String getBareMetalInput();
```

- *Type:* java.lang.String

---

##### `baselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="baselineEbsBandwidthMbpsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps getBaselineEbsBandwidthMbpsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `burstablePerformanceInput`<sup>Optional</sup> <a name="burstablePerformanceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```java
public java.lang.String getBurstablePerformanceInput();
```

- *Type:* java.lang.String

---

##### `cpuManufacturersInput`<sup>Optional</sup> <a name="cpuManufacturersInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypesInput`<sup>Optional</sup> <a name="excludedInstanceTypesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceGenerationsInput`<sup>Optional</sup> <a name="instanceGenerationsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localStorageInput`<sup>Optional</sup> <a name="localStorageInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageInput"></a>

```java
public java.lang.String getLocalStorageInput();
```

- *Type:* java.lang.String

---

##### `localStorageTypesInput`<sup>Optional</sup> <a name="localStorageTypesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memoryGibPerVcpuInput`<sup>Optional</sup> <a name="memoryGibPerVcpuInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu getMemoryGibPerVcpuInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `memoryMibInput`<sup>Optional</sup> <a name="memoryMibInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib getMemoryMibInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib</a>

---

##### `networkInterfaceCountInput`<sup>Optional</sup> <a name="networkInterfaceCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount getNetworkInterfaceCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount</a>

---

##### `onDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="onDemandMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPriceInput();
```

- *Type:* java.lang.Number

---

##### `requireHibernateSupportInput`<sup>Optional</sup> <a name="requireHibernateSupportInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```java
public java.lang.Object getRequireHibernateSupportInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="spotMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPriceInput();
```

- *Type:* java.lang.Number

---

##### `totalLocalStorageGbInput`<sup>Optional</sup> <a name="totalLocalStorageGbInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb getTotalLocalStorageGbInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---

##### `vcpuCountInput`<sup>Optional</sup> <a name="vcpuCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount getVcpuCountInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.bareMetal"></a>

```java
public java.lang.String getBareMetal();
```

- *Type:* java.lang.String

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```java
public java.lang.String getBurstablePerformance();
```

- *Type:* java.lang.String

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorage"></a>

```java
public java.lang.String getLocalStorage();
```

- *Type:* java.lang.String

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```java
public java.lang.Object getRequireHibernateSupport();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb</a>

---


### Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resetMax">resetMax</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```java
public void resetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount</a>

---


### Ec2FleetLaunchTemplateConfigOverrideList <a name="Ec2FleetLaunchTemplateConfigOverrideList" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideList;

new Ec2FleetLaunchTemplateConfigOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a>>

---


### Ec2FleetLaunchTemplateConfigOverrideOutputReference <a name="Ec2FleetLaunchTemplateConfigOverrideOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference;

new Ec2FleetLaunchTemplateConfigOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements">putInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceRequirements">resetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetMaxPrice">resetMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceRequirements` <a name="putInstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements"></a>

```java
public void putInstanceRequirements(Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetInstanceRequirements` <a name="resetInstanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceRequirements"></a>

```java
public void resetInstanceRequirements()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetMaxPrice` <a name="resetMaxPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetMaxPrice"></a>

```java
public void resetMaxPrice()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.resetWeightedCapacity"></a>

```java
public void resetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirementsInput">instanceRequirementsInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPriceInput">maxPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPrice">maxPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirements"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference getInstanceRequirements();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `instanceRequirementsInput`<sup>Optional</sup> <a name="instanceRequirementsInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceRequirementsInput"></a>

```java
public Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements getInstanceRequirementsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements">Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `maxPriceInput`<sup>Optional</sup> <a name="maxPriceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPriceInput"></a>

```java
public java.lang.String getMaxPriceInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.Number getWeightedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `maxPrice`<sup>Required</sup> <a name="maxPrice" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.maxPrice"></a>

```java
public java.lang.String getMaxPrice();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverrideOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetLaunchTemplateConfigOverride">Ec2FleetLaunchTemplateConfigOverride</a> OR com.hashicorp.cdktf.IResolvable

---


### Ec2FleetOnDemandOptionsOutputReference <a name="Ec2FleetOnDemandOptionsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetOnDemandOptionsOutputReference;

new Ec2FleetOnDemandOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy">resetAllocationStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationStrategy` <a name="resetAllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.resetAllocationStrategy"></a>

```java
public void resetAllocationStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptionsOutputReference.property.internalValue"></a>

```java
public Ec2FleetOnDemandOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetOnDemandOptions">Ec2FleetOnDemandOptions</a>

---


### Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference <a name="Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference;

new Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">resetReplacementStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplacementStrategy` <a name="resetReplacementStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```java
public void resetReplacementStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">replacementStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">replacementStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replacementStrategyInput`<sup>Optional</sup> <a name="replacementStrategyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```java
public java.lang.String getReplacementStrategyInput();
```

- *Type:* java.lang.String

---

##### `replacementStrategy`<sup>Required</sup> <a name="replacementStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```java
public java.lang.String getReplacementStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---


### Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference <a name="Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference;

new Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance">putCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance">resetCapacityRebalance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityRebalance` <a name="putCapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```java
public void putCapacityRebalance(Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---

##### `resetCapacityRebalance` <a name="resetCapacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```java
public void resetCapacityRebalance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance">capacityRebalance</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">capacityRebalanceInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityRebalance`<sup>Required</sup> <a name="capacityRebalance" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference getCapacityRebalance();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `capacityRebalanceInput`<sup>Optional</sup> <a name="capacityRebalanceInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance getCapacityRebalanceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance">Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference.property.internalValue"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---


### Ec2FleetSpotOptionsOutputReference <a name="Ec2FleetSpotOptionsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetSpotOptionsOutputReference;

new Ec2FleetSpotOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies">putMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy">resetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior">resetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount">resetInstancePoolsToUseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies">resetMaintenanceStrategies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceStrategies` <a name="putMaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies"></a>

```java
public void putMaintenanceStrategies(Ec2FleetSpotOptionsMaintenanceStrategies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.putMaintenanceStrategies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---

##### `resetAllocationStrategy` <a name="resetAllocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetAllocationStrategy"></a>

```java
public void resetAllocationStrategy()
```

##### `resetInstanceInterruptionBehavior` <a name="resetInstanceInterruptionBehavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```java
public void resetInstanceInterruptionBehavior()
```

##### `resetInstancePoolsToUseCount` <a name="resetInstancePoolsToUseCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetInstancePoolsToUseCount"></a>

```java
public void resetInstancePoolsToUseCount()
```

##### `resetMaintenanceStrategies` <a name="resetMaintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.resetMaintenanceStrategies"></a>

```java
public void resetMaintenanceStrategies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies">maintenanceStrategies</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">instanceInterruptionBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput">instancePoolsToUseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput">maintenanceStrategiesInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceStrategies`<sup>Required</sup> <a name="maintenanceStrategies" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategies"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference getMaintenanceStrategies();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference">Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference</a>

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `instanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="instanceInterruptionBehaviorInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```java
public java.lang.String getInstanceInterruptionBehaviorInput();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCountInput`<sup>Optional</sup> <a name="instancePoolsToUseCountInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCountInput"></a>

```java
public java.lang.Number getInstancePoolsToUseCountInput();
```

- *Type:* java.lang.Number

---

##### `maintenanceStrategiesInput`<sup>Optional</sup> <a name="maintenanceStrategiesInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.maintenanceStrategiesInput"></a>

```java
public Ec2FleetSpotOptionsMaintenanceStrategies getMaintenanceStrategiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsMaintenanceStrategies">Ec2FleetSpotOptionsMaintenanceStrategies</a>

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```java
public java.lang.String getInstanceInterruptionBehavior();
```

- *Type:* java.lang.String

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.instancePoolsToUseCount"></a>

```java
public java.lang.Number getInstancePoolsToUseCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptionsOutputReference.property.internalValue"></a>

```java
public Ec2FleetSpotOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetSpotOptions">Ec2FleetSpotOptions</a>

---


### Ec2FleetTargetCapacitySpecificationOutputReference <a name="Ec2FleetTargetCapacitySpecificationOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetTargetCapacitySpecificationOutputReference;

new Ec2FleetTargetCapacitySpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity">resetOnDemandTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity">resetSpotTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType">resetTargetCapacityUnitType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDemandTargetCapacity` <a name="resetOnDemandTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetOnDemandTargetCapacity"></a>

```java
public void resetOnDemandTargetCapacity()
```

##### `resetSpotTargetCapacity` <a name="resetSpotTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetSpotTargetCapacity"></a>

```java
public void resetSpotTargetCapacity()
```

##### `resetTargetCapacityUnitType` <a name="resetTargetCapacityUnitType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.resetTargetCapacityUnitType"></a>

```java
public void resetTargetCapacityUnitType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput">defaultTargetCapacityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput">onDemandTargetCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput">spotTargetCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput">targetCapacityUnitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput">totalTargetCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType">defaultTargetCapacityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity">spotTargetCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType">targetCapacityUnitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity">totalTargetCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultTargetCapacityTypeInput`<sup>Optional</sup> <a name="defaultTargetCapacityTypeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityTypeInput"></a>

```java
public java.lang.String getDefaultTargetCapacityTypeInput();
```

- *Type:* java.lang.String

---

##### `onDemandTargetCapacityInput`<sup>Optional</sup> <a name="onDemandTargetCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacityInput"></a>

```java
public java.lang.Number getOnDemandTargetCapacityInput();
```

- *Type:* java.lang.Number

---

##### `spotTargetCapacityInput`<sup>Optional</sup> <a name="spotTargetCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacityInput"></a>

```java
public java.lang.Number getSpotTargetCapacityInput();
```

- *Type:* java.lang.Number

---

##### `targetCapacityUnitTypeInput`<sup>Optional</sup> <a name="targetCapacityUnitTypeInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitTypeInput"></a>

```java
public java.lang.String getTargetCapacityUnitTypeInput();
```

- *Type:* java.lang.String

---

##### `totalTargetCapacityInput`<sup>Optional</sup> <a name="totalTargetCapacityInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacityInput"></a>

```java
public java.lang.Number getTotalTargetCapacityInput();
```

- *Type:* java.lang.Number

---

##### `defaultTargetCapacityType`<sup>Required</sup> <a name="defaultTargetCapacityType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.defaultTargetCapacityType"></a>

```java
public java.lang.String getDefaultTargetCapacityType();
```

- *Type:* java.lang.String

---

##### `onDemandTargetCapacity`<sup>Required</sup> <a name="onDemandTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.onDemandTargetCapacity"></a>

```java
public java.lang.Number getOnDemandTargetCapacity();
```

- *Type:* java.lang.Number

---

##### `spotTargetCapacity`<sup>Required</sup> <a name="spotTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.spotTargetCapacity"></a>

```java
public java.lang.Number getSpotTargetCapacity();
```

- *Type:* java.lang.Number

---

##### `targetCapacityUnitType`<sup>Required</sup> <a name="targetCapacityUnitType" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.targetCapacityUnitType"></a>

```java
public java.lang.String getTargetCapacityUnitType();
```

- *Type:* java.lang.String

---

##### `totalTargetCapacity`<sup>Required</sup> <a name="totalTargetCapacity" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.totalTargetCapacity"></a>

```java
public java.lang.Number getTotalTargetCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecificationOutputReference.property.internalValue"></a>

```java
public Ec2FleetTargetCapacitySpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTargetCapacitySpecification">Ec2FleetTargetCapacitySpecification</a>

---


### Ec2FleetTimeoutsOutputReference <a name="Ec2FleetTimeoutsOutputReference" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_fleet.Ec2FleetTimeoutsOutputReference;

new Ec2FleetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ec2Fleet.Ec2FleetTimeouts">Ec2FleetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



