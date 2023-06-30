# `data_aws_ecs_task_execution`

Refer to the Terraform Registory for docs: [`data_aws_ecs_task_execution`](https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution).

# `dataAwsEcsTaskExecution` Submodule <a name="`dataAwsEcsTaskExecution` Submodule" id="@cdktf/provider-aws.dataAwsEcsTaskExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcsTaskExecution <a name="DataAwsEcsTaskExecution" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution aws_ecs_task_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecution;

DataAwsEcsTaskExecution.Builder.create(Construct scope, java.lang.String id)
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
    .cluster(java.lang.String)
    .taskDefinition(java.lang.String)
//  .capacityProviderStrategy(IResolvable)
//  .capacityProviderStrategy(java.util.List<DataAwsEcsTaskExecutionCapacityProviderStrategy>)
//  .desiredCount(java.lang.Number)
//  .enableEcsManagedTags(java.lang.Boolean)
//  .enableEcsManagedTags(IResolvable)
//  .enableExecuteCommand(java.lang.Boolean)
//  .enableExecuteCommand(IResolvable)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .launchType(java.lang.String)
//  .networkConfiguration(DataAwsEcsTaskExecutionNetworkConfiguration)
//  .overrides(DataAwsEcsTaskExecutionOverrides)
//  .placementConstraints(IResolvable)
//  .placementConstraints(java.util.List<DataAwsEcsTaskExecutionPlacementConstraints>)
//  .placementStrategy(IResolvable)
//  .placementStrategy(java.util.List<DataAwsEcsTaskExecutionPlacementStrategy>)
//  .platformVersion(java.lang.String)
//  .propagateTags(java.lang.String)
//  .referenceId(java.lang.String)
//  .startedBy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>></code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.launchType">launchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementConstraints">placementConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>></code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementStrategy">placementStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>></code> | placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.referenceId">referenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.startedBy">startedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.taskDefinition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.capacityProviderStrategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>>

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#capacity_provider_strategy DataAwsEcsTaskExecution#capacity_provider_strategy}

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.desiredCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}.

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableEcsManagedTags"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.enableExecuteCommand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.group"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.launchType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#network_configuration DataAwsEcsTaskExecution#network_configuration}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.overrides"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#overrides DataAwsEcsTaskExecution#overrides}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementConstraints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>>

placement_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#placement_constraints DataAwsEcsTaskExecution#placement_constraints}

---

##### `placementStrategy`<sup>Optional</sup> <a name="placementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.placementStrategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>>

placement_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#placement_strategy DataAwsEcsTaskExecution#placement_strategy}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.platformVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.propagateTags"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}.

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.referenceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}.

---

##### `startedBy`<sup>Optional</sup> <a name="startedBy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.startedBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy">putPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetDesiredCount">resetDesiredCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementStrategy">resetPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetReferenceId">resetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetStartedBy">resetStartedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy"></a>

```java
public void putCapacityProviderStrategy(IResolvable OR java.util.List<DataAwsEcsTaskExecutionCapacityProviderStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(DataAwsEcsTaskExecutionNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides"></a>

```java
public void putOverrides(DataAwsEcsTaskExecutionOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints"></a>

```java
public void putPlacementConstraints(IResolvable OR java.util.List<DataAwsEcsTaskExecutionPlacementConstraints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementConstraints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>>

---

##### `putPlacementStrategy` <a name="putPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy"></a>

```java
public void putPlacementStrategy(IResolvable OR java.util.List<DataAwsEcsTaskExecutionPlacementStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.putPlacementStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>>

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetCapacityProviderStrategy"></a>

```java
public void resetCapacityProviderStrategy()
```

##### `resetDesiredCount` <a name="resetDesiredCount" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetDesiredCount"></a>

```java
public void resetDesiredCount()
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableEcsManagedTags"></a>

```java
public void resetEnableEcsManagedTags()
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetEnableExecuteCommand"></a>

```java
public void resetEnableExecuteCommand()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetId"></a>

```java
public void resetId()
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetLaunchType"></a>

```java
public void resetLaunchType()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetOverrides"></a>

```java
public void resetOverrides()
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementConstraints"></a>

```java
public void resetPlacementConstraints()
```

##### `resetPlacementStrategy` <a name="resetPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlacementStrategy"></a>

```java
public void resetPlacementStrategy()
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPlatformVersion"></a>

```java
public void resetPlatformVersion()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetReferenceId"></a>

```java
public void resetReferenceId()
```

##### `resetStartedBy` <a name="resetStartedBy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetStartedBy"></a>

```java
public void resetStartedBy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecution;

DataAwsEcsTaskExecution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecution;

DataAwsEcsTaskExecution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecution;

DataAwsEcsTaskExecution.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList">DataAwsEcsTaskExecutionCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference">DataAwsEcsTaskExecutionNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference">DataAwsEcsTaskExecutionOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList">DataAwsEcsTaskExecutionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategy">placementStrategy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList">DataAwsEcsTaskExecutionPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskArns">taskArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCountInput">desiredCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchTypeInput">launchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overridesInput">overridesInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategyInput">placementStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceIdInput">referenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedByInput">startedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedBy">startedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategy"></a>

```java
public DataAwsEcsTaskExecutionCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList">DataAwsEcsTaskExecutionCapacityProviderStrategyList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfiguration"></a>

```java
public DataAwsEcsTaskExecutionNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference">DataAwsEcsTaskExecutionNetworkConfigurationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overrides"></a>

```java
public DataAwsEcsTaskExecutionOverridesOutputReference getOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference">DataAwsEcsTaskExecutionOverridesOutputReference</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraints"></a>

```java
public DataAwsEcsTaskExecutionPlacementConstraintsList getPlacementConstraints();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList">DataAwsEcsTaskExecutionPlacementConstraintsList</a>

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategy"></a>

```java
public DataAwsEcsTaskExecutionPlacementStrategyList getPlacementStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList">DataAwsEcsTaskExecutionPlacementStrategyList</a>

---

##### `taskArns`<sup>Required</sup> <a name="taskArns" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskArns"></a>

```java
public java.util.List<java.lang.String> getTaskArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.capacityProviderStrategyInput"></a>

```java
public java.lang.Object getCapacityProviderStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `desiredCountInput`<sup>Optional</sup> <a name="desiredCountInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCountInput"></a>

```java
public java.lang.Number getDesiredCountInput();
```

- *Type:* java.lang.Number

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTagsInput"></a>

```java
public java.lang.Object getEnableEcsManagedTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommandInput"></a>

```java
public java.lang.Object getEnableExecuteCommandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchTypeInput"></a>

```java
public java.lang.String getLaunchTypeInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.networkConfigurationInput"></a>

```java
public DataAwsEcsTaskExecutionNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.overridesInput"></a>

```java
public DataAwsEcsTaskExecutionOverrides getOverridesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementConstraintsInput"></a>

```java
public java.lang.Object getPlacementConstraintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>>

---

##### `placementStrategyInput`<sup>Optional</sup> <a name="placementStrategyInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.placementStrategyInput"></a>

```java
public java.lang.Object getPlacementStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTagsInput"></a>

```java
public java.lang.String getPropagateTagsInput();
```

- *Type:* java.lang.String

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceIdInput"></a>

```java
public java.lang.String getReferenceIdInput();
```

- *Type:* java.lang.String

---

##### `startedByInput`<sup>Optional</sup> <a name="startedByInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedByInput"></a>

```java
public java.lang.String getStartedByInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinitionInput"></a>

```java
public java.lang.String getTaskDefinitionInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.desiredCount"></a>

```java
public java.lang.Number getDesiredCount();
```

- *Type:* java.lang.Number

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableEcsManagedTags"></a>

```java
public java.lang.Object getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.enableExecuteCommand"></a>

```java
public java.lang.Object getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

---

##### `startedBy`<sup>Required</sup> <a name="startedBy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.startedBy"></a>

```java
public java.lang.String getStartedBy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcsTaskExecutionCapacityProviderStrategy <a name="DataAwsEcsTaskExecutionCapacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionCapacityProviderStrategy;

DataAwsEcsTaskExecutionCapacityProviderStrategy.builder()
    .capacityProvider(java.lang.String)
//  .base(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#capacity_provider DataAwsEcsTaskExecution#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.base">base</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#base DataAwsEcsTaskExecution#base}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#weight DataAwsEcsTaskExecution#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#capacity_provider DataAwsEcsTaskExecution#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#base DataAwsEcsTaskExecution#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#weight DataAwsEcsTaskExecution#weight}.

---

### DataAwsEcsTaskExecutionConfig <a name="DataAwsEcsTaskExecutionConfig" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionConfig;

DataAwsEcsTaskExecutionConfig.builder()
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
    .cluster(java.lang.String)
    .taskDefinition(java.lang.String)
//  .capacityProviderStrategy(IResolvable)
//  .capacityProviderStrategy(java.util.List<DataAwsEcsTaskExecutionCapacityProviderStrategy>)
//  .desiredCount(java.lang.Number)
//  .enableEcsManagedTags(java.lang.Boolean)
//  .enableEcsManagedTags(IResolvable)
//  .enableExecuteCommand(java.lang.Boolean)
//  .enableExecuteCommand(IResolvable)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .launchType(java.lang.String)
//  .networkConfiguration(DataAwsEcsTaskExecutionNetworkConfiguration)
//  .overrides(DataAwsEcsTaskExecutionOverrides)
//  .placementConstraints(IResolvable)
//  .placementConstraints(java.util.List<DataAwsEcsTaskExecutionPlacementConstraints>)
//  .placementStrategy(IResolvable)
//  .placementStrategy(java.util.List<DataAwsEcsTaskExecutionPlacementStrategy>)
//  .platformVersion(java.lang.String)
//  .propagateTags(java.lang.String)
//  .referenceId(java.lang.String)
//  .startedBy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>></code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.desiredCount">desiredCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.launchType">launchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementConstraints">placementConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>></code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementStrategy">placementStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>></code> | placement_strategy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.startedBy">startedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.capacityProviderStrategy"></a>

```java
public java.lang.Object getCapacityProviderStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>>

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#capacity_provider_strategy DataAwsEcsTaskExecution#capacity_provider_strategy}

---

##### `desiredCount`<sup>Optional</sup> <a name="desiredCount" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.desiredCount"></a>

```java
public java.lang.Number getDesiredCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}.

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableEcsManagedTags"></a>

```java
public java.lang.Object getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.enableExecuteCommand"></a>

```java
public java.lang.Object getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.networkConfiguration"></a>

```java
public DataAwsEcsTaskExecutionNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#network_configuration DataAwsEcsTaskExecution#network_configuration}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.overrides"></a>

```java
public DataAwsEcsTaskExecutionOverrides getOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#overrides DataAwsEcsTaskExecution#overrides}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementConstraints"></a>

```java
public java.lang.Object getPlacementConstraints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>>

placement_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#placement_constraints DataAwsEcsTaskExecution#placement_constraints}

---

##### `placementStrategy`<sup>Optional</sup> <a name="placementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.placementStrategy"></a>

```java
public java.lang.Object getPlacementStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>>

placement_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#placement_strategy DataAwsEcsTaskExecution#placement_strategy}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}.

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}.

---

##### `startedBy`<sup>Optional</sup> <a name="startedBy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.startedBy"></a>

```java
public java.lang.String getStartedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}.

---

### DataAwsEcsTaskExecutionNetworkConfiguration <a name="DataAwsEcsTaskExecutionNetworkConfiguration" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionNetworkConfiguration;

DataAwsEcsTaskExecutionNetworkConfiguration.builder()
    .subnets(java.util.List<java.lang.String>)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}.

---

### DataAwsEcsTaskExecutionOverrides <a name="DataAwsEcsTaskExecutionOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverrides;

DataAwsEcsTaskExecutionOverrides.builder()
//  .containerOverrides(IResolvable)
//  .containerOverrides(java.util.List<DataAwsEcsTaskExecutionOverridesContainerOverrides>)
//  .cpu(java.lang.String)
//  .executionRoleArn(java.lang.String)
//  .inferenceAcceleratorOverrides(IResolvable)
//  .inferenceAcceleratorOverrides(java.util.List<DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides>)
//  .memory(java.lang.String)
//  .taskRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.containerOverrides">containerOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>></code> | container_overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.inferenceAcceleratorOverrides">inferenceAcceleratorOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>></code> | inference_accelerator_overrides block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}. |

---

##### `containerOverrides`<sup>Optional</sup> <a name="containerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.containerOverrides"></a>

```java
public java.lang.Object getContainerOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>>

container_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#container_overrides DataAwsEcsTaskExecution#container_overrides}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}.

---

##### `inferenceAcceleratorOverrides`<sup>Optional</sup> <a name="inferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.inferenceAcceleratorOverrides"></a>

```java
public java.lang.Object getInferenceAcceleratorOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>>

inference_accelerator_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#inference_accelerator_overrides DataAwsEcsTaskExecution#inference_accelerator_overrides}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}.

---

### DataAwsEcsTaskExecutionOverridesContainerOverrides <a name="DataAwsEcsTaskExecutionOverridesContainerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverrides;

DataAwsEcsTaskExecutionOverridesContainerOverrides.builder()
    .name(java.lang.String)
//  .command(java.util.List<java.lang.String>)
//  .cpu(java.lang.Number)
//  .environment(IResolvable)
//  .environment(java.util.List<DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment>)
//  .memory(java.lang.Number)
//  .memoryReservation(java.lang.Number)
//  .resourceRequirements(IResolvable)
//  .resourceRequirements(java.util.List<DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#name DataAwsEcsTaskExecution#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#command DataAwsEcsTaskExecution#command}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.environment">environment</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memory">memory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#memory_reservation DataAwsEcsTaskExecution#memory_reservation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.resourceRequirements">resourceRequirements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>></code> | resource_requirements block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#name DataAwsEcsTaskExecution#name}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#command DataAwsEcsTaskExecution#command}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.environment"></a>

```java
public java.lang.Object getEnvironment();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#environment DataAwsEcsTaskExecution#environment}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}.

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#memory_reservation DataAwsEcsTaskExecution#memory_reservation}.

---

##### `resourceRequirements`<sup>Optional</sup> <a name="resourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides.property.resourceRequirements"></a>

```java
public java.lang.Object getResourceRequirements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>>

resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#resource_requirements DataAwsEcsTaskExecution#resource_requirements}

---

### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment;

DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#key DataAwsEcsTaskExecution#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#key DataAwsEcsTaskExecution#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}.

---

### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements;

DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.builder()
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}.

---

### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides;

DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.builder()
//  .deviceName(java.lang.String)
//  .deviceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#device_name DataAwsEcsTaskExecution#device_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceType">deviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#device_type DataAwsEcsTaskExecution#device_type}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#device_name DataAwsEcsTaskExecution#device_name}.

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides.property.deviceType"></a>

```java
public java.lang.String getDeviceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#device_type DataAwsEcsTaskExecution#device_type}.

---

### DataAwsEcsTaskExecutionPlacementConstraints <a name="DataAwsEcsTaskExecutionPlacementConstraints" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionPlacementConstraints;

DataAwsEcsTaskExecutionPlacementConstraints.builder()
    .type(java.lang.String)
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#expression DataAwsEcsTaskExecution#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#expression DataAwsEcsTaskExecution#expression}.

---

### DataAwsEcsTaskExecutionPlacementStrategy <a name="DataAwsEcsTaskExecutionPlacementStrategy" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionPlacementStrategy;

DataAwsEcsTaskExecutionPlacementStrategy.builder()
    .type(java.lang.String)
//  .field(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#field DataAwsEcsTaskExecution#field}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.1/docs/data-sources/ecs_task_execution#field DataAwsEcsTaskExecution#field}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEcsTaskExecutionCapacityProviderStrategyList <a name="DataAwsEcsTaskExecutionCapacityProviderStrategyList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionCapacityProviderStrategyList;

new DataAwsEcsTaskExecutionCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get"></a>

```java
public DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>>

---


### DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference <a name="DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference;

new DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetBase"></a>

```java
public void resetBase()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.baseInput"></a>

```java
public java.lang.Number getBaseInput();
```

- *Type:* java.lang.Number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```java
public java.lang.String getCapacityProviderInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionCapacityProviderStrategy">DataAwsEcsTaskExecutionCapacityProviderStrategy</a>

---


### DataAwsEcsTaskExecutionNetworkConfigurationOutputReference <a name="DataAwsEcsTaskExecutionNetworkConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference;

new DataAwsEcsTaskExecutionNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsEcsTaskExecutionNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionNetworkConfiguration">DataAwsEcsTaskExecutionNetworkConfiguration</a>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList;

new DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get"></a>

```java
public DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference;

new DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesList;

new DataAwsEcsTaskExecutionOverridesContainerOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get"></a>

```java
public DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference;

new DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements">putResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetResourceRequirements">resetResourceRequirements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment"></a>

```java
public void putEnvironment(IResolvable OR java.util.List<DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>>

---

##### `putResourceRequirements` <a name="putResourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements"></a>

```java
public void putResourceRequirements(IResolvable OR java.util.List<DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.putResourceRequirements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>>

---

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetMemoryReservation"></a>

```java
public void resetMemoryReservation()
```

##### `resetResourceRequirements` <a name="resetResourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.resetResourceRequirements"></a>

```java
public void resetResourceRequirements()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirements">resourceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environmentInput">environmentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservationInput">memoryReservationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirementsInput">resourceRequirementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environment"></a>

```java
public DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList</a>

---

##### `resourceRequirements`<sup>Required</sup> <a name="resourceRequirements" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirements"></a>

```java
public DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList getResourceRequirements();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.environmentInput"></a>

```java
public java.lang.Object getEnvironmentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment">DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment</a>>

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservationInput"></a>

```java
public java.lang.Number getMemoryReservationInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceRequirementsInput`<sup>Optional</sup> <a name="resourceRequirementsInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.resourceRequirementsInput"></a>

```java
public java.lang.Object getResourceRequirementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.memoryReservation"></a>

```java
public java.lang.Number getMemoryReservation();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList;

new DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get"></a>

```java
public DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>>

---


### DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference <a name="DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference;

new DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements">DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements</a>

---


### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList;

new DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get"></a>

```java
public DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>>

---


### DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference;

new DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceType">resetDeviceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.resetDeviceType"></a>

```java
public void resetDeviceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceType">deviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceTypeInput"></a>

```java
public java.lang.String getDeviceTypeInput();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.deviceType"></a>

```java
public java.lang.String getDeviceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>

---


### DataAwsEcsTaskExecutionOverridesOutputReference <a name="DataAwsEcsTaskExecutionOverridesOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionOverridesOutputReference;

new DataAwsEcsTaskExecutionOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides">putContainerOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides">putInferenceAcceleratorOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetContainerOverrides">resetContainerOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetInferenceAcceleratorOverrides">resetInferenceAcceleratorOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetTaskRoleArn">resetTaskRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerOverrides` <a name="putContainerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides"></a>

```java
public void putContainerOverrides(IResolvable OR java.util.List<DataAwsEcsTaskExecutionOverridesContainerOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putContainerOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>>

---

##### `putInferenceAcceleratorOverrides` <a name="putInferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides"></a>

```java
public void putInferenceAcceleratorOverrides(IResolvable OR java.util.List<DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.putInferenceAcceleratorOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>>

---

##### `resetContainerOverrides` <a name="resetContainerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetContainerOverrides"></a>

```java
public void resetContainerOverrides()
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetInferenceAcceleratorOverrides` <a name="resetInferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetInferenceAcceleratorOverrides"></a>

```java
public void resetInferenceAcceleratorOverrides()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetTaskRoleArn` <a name="resetTaskRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.resetTaskRoleArn"></a>

```java
public void resetTaskRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverrides">containerOverrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList">DataAwsEcsTaskExecutionOverridesContainerOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverrides">inferenceAcceleratorOverrides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverridesInput">containerOverridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverridesInput">inferenceAcceleratorOverridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArnInput">taskRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerOverrides`<sup>Required</sup> <a name="containerOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverrides"></a>

```java
public DataAwsEcsTaskExecutionOverridesContainerOverridesList getContainerOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverridesList">DataAwsEcsTaskExecutionOverridesContainerOverridesList</a>

---

##### `inferenceAcceleratorOverrides`<sup>Required</sup> <a name="inferenceAcceleratorOverrides" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverrides"></a>

```java
public DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList getInferenceAcceleratorOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList</a>

---

##### `containerOverridesInput`<sup>Optional</sup> <a name="containerOverridesInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.containerOverridesInput"></a>

```java
public java.lang.Object getContainerOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesContainerOverrides">DataAwsEcsTaskExecutionOverridesContainerOverrides</a>>

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `inferenceAcceleratorOverridesInput`<sup>Optional</sup> <a name="inferenceAcceleratorOverridesInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.inferenceAcceleratorOverridesInput"></a>

```java
public java.lang.Object getInferenceAcceleratorOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides">DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides</a>>

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `taskRoleArnInput`<sup>Optional</sup> <a name="taskRoleArnInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArnInput"></a>

```java
public java.lang.String getTaskRoleArnInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverridesOutputReference.property.internalValue"></a>

```java
public DataAwsEcsTaskExecutionOverrides getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionOverrides">DataAwsEcsTaskExecutionOverrides</a>

---


### DataAwsEcsTaskExecutionPlacementConstraintsList <a name="DataAwsEcsTaskExecutionPlacementConstraintsList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionPlacementConstraintsList;

new DataAwsEcsTaskExecutionPlacementConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get"></a>

```java
public DataAwsEcsTaskExecutionPlacementConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>>

---


### DataAwsEcsTaskExecutionPlacementConstraintsOutputReference <a name="DataAwsEcsTaskExecutionPlacementConstraintsOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference;

new DataAwsEcsTaskExecutionPlacementConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementConstraints">DataAwsEcsTaskExecutionPlacementConstraints</a>

---


### DataAwsEcsTaskExecutionPlacementStrategyList <a name="DataAwsEcsTaskExecutionPlacementStrategyList" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionPlacementStrategyList;

new DataAwsEcsTaskExecutionPlacementStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get"></a>

```java
public DataAwsEcsTaskExecutionPlacementStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>>

---


### DataAwsEcsTaskExecutionPlacementStrategyOutputReference <a name="DataAwsEcsTaskExecutionPlacementStrategyOutputReference" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ecs_task_execution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference;

new DataAwsEcsTaskExecutionPlacementStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsEcsTaskExecution.DataAwsEcsTaskExecutionPlacementStrategy">DataAwsEcsTaskExecutionPlacementStrategy</a>

---



